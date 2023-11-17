import { useEffect, useState } from 'react'

import { getList } from '../../services/request'
import { Button, ListRender, Loader } from '../../components' //ListRender já esta importando o ListCard

import './index.css'

export const ListScreen = () => {
    const [loading, setLoading] = useState(true); //inicialmente vai nascer como true
    const [listData, setListData] = useState([])
    
    const loadListItems = async () => {
        setLoading(true);
        const result = await getList();
        console.log({result});
        setListData(result)
        setLoading(false);
    }
    useEffect (() => {
        loadListItems();
    },[])


    return(
        //criando a pagina de listagem
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
                        <Button>Adicionar</Button>
                    </div>
                    
                </div>
                <div className='list-screen-list-container'>
                    {
                        loading ? <Loader /> : <ListRender list={listData} />
                    }

                </div>
            </div>
        </div>
    )
}