import { useEffect, useState } from 'react'

import { getList, updateItem } from '../../services/request'
import { Button, ListRender, Loader, Modal } from '../../components' //ListRender já esta importando o ListCard

import './index.css'

export const ListScreen = () => {
    const [modalVisible, setModalVisible] = useState(false); // inicialmente não vai mostrar o modal, tem que esperar a ação de clicar no botão de adicionar
    const [loading, setLoading] = useState(true); //inicialmente vai nascer como true
    const [listData, setListData] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)
    
    const loadListItems = async () => {
        setLoading(true);
        const result = await getList();
        //console.log({result});
        setListData(result)
        setLoading(false);
    }
    useEffect (() => {
        loadListItems();
    },[])

    const onClickAddButton = () => {
        setSelectedItem(null);
        setModalVisible(true) //mudando de false na const ListScreen para true na ação do click do Button  
    }

    const onCloseModal = () => {
        setModalVisible(false); //quando fechar o modal vai mudar o estado de visibilidade do modal para false
        loadListItems();
        setSelectedItem(null);
    }

    const onEditItem = (item) => {
        setSelectedItem(item)
        setModalVisible(true)
    }

    const onCheckItem = async (item) => {
        const result = await updateItem(item._id, {
            name: item.name,
            quantity: Number(item.quantity),
            checked: !item.checked,
        });
        
        if(!result.error){
            await loadListItems();
        }
    };


    return(
        //criando a pagina de listagem
        //colocando a ação de add items do modal no buttom de adicionar novos items 
        <div className='list-screen-container'>
            <div className='list-screen-content-container'>
                <div className='list-screen-header'>
                    <div className='list-screen-title-container'>
                        <img 
                            className='list-screen-header-logo'
                            src='/images/logo.png' 
                            alt='supermarket-list-logo'
                        />
                        <h1 className='list-screen-header-title'>Lista Supermercado</h1>
                    </div>
                    <div className='list-screen-header-button-container'>
                        <Button onClick={onClickAddButton}>
                            {
                               window.innerWidth <= 420 ? <img src='images/list.svg' alt='list-menu'/> : 'Adicionar' //condicional para o botão
                            }
                        </Button>
                    </div>
                    
                </div>
                <div className='list-screen-list-container'>
                    {
                        loading ? ( 
                            <Loader />
                        ) : (
                            <ListRender onCheckItem={onCheckItem} onEdit={onEditItem} list={listData} />
                        )}
                </div>
                
            </div>
            {
                modalVisible && <Modal item={selectedItem} onClose={onCloseModal} /> //se o modal tiver o estado de visivel && chamando o onCloseModal
            }
        </div>
    );
};