import { useEffect, useState } from 'react'
import { getList, updateItem } from 'services/request'
// import { Button, ListRender, Loader, Modal, Title } from 'components'
import { Modal, ListRender } from 'components/organisms'
import { Title, Loader, Button } from 'components/atoms'
import { ScreenContainer, ContentContainer, HeaderContainer, TitleContainer, LogoImage, HeaderButtonContainer, ListContainer } from './styles'
// import './index.css'

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
    <ScreenContainer>
      <ContentContainer>
        <HeaderContainer>
          <TitleContainer>
            <LogoImage
              src="/images/logo.png"
              alt="supermarket-list-logo"
            />
            <Title fontSize={32} ml={12} lineHeight={32}>
              Lista Supermercado
            </Title>
          </TitleContainer>
          <HeaderButtonContainer>
            <Button onClick={onClickAddButton}>
              {
                window.innerWidth <= 420 ? (<img src="images/list.svg" alt="list-menu" />) : ('Adicionar')
              }
            </Button>
          </HeaderButtonContainer>
        </HeaderContainer>
        <ListContainer>
          {loading ? (<Loader />) : (<ListRender onCheckItem={onCheckItem} onEdit={onEditItem} list={listData}/>)}
        </ListContainer>
      </ContentContainer>
      {
        modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />
      }
    </ScreenContainer>
  )
}
