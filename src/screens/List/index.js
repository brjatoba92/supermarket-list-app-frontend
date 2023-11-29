import { useEffect, useState } from 'react'
import { getList, updateItem } from 'services/request'
// import { Button, ListRender, Loader, Modal, Title } from 'components'
import { Modal, ListRender } from 'components/organisms'
import { Title, Loader, Button } from 'components/atoms'

import './index.css'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const loadListItems = async () => {
    setLoading(true)
    const result = await getList()
    setListData(result)
    setLoading(false)
  }
  useEffect(() => {
    loadListItems()
  }, [])

  const onClickAddButton = () => {
    setSelectedItem(null)
    setModalVisible(true)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    loadListItems()
    setSelectedItem(null)
  }

  const onEditItem = (item) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const onCheckItem = async (item) => {
    const result = await updateItem(item._id, {
      name: item.name,
      quantity: Number(item.quantity),
      checked: !item.checked
    })

    if (!result.error) {
      await loadListItems()
    }
  }

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-title-container">
            <img
              className="list-screen-header-logo"
              src="/images/logo.png"
              alt="supermarket-list-logo"
            />
            <Title fontSize={32} ml={12} lineHeight={32}>
              Lista Supermercado
            </Title>
          </div>
          <div className="list-screen-header-button-container">
            <Button onClick={onClickAddButton}>
              {
                window.innerWidth <= 420 ? (<img src="images/list.svg" alt="list-menu" />) : ('Adicionar')
              }
            </Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? (<Loader />) : (<ListRender onCheckItem={onCheckItem} onEdit={onEditItem} list={listData}/>)}
        </div>
      </div>
      {
        modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />
      }
    </div>
  )
}
