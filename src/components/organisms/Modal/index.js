import { useEffect, useState } from 'react'
import { Input } from 'components/molecules'
import { Button, Title } from 'components/atoms'
import { createItem, updateItem, deleteItem } from 'services/request'
import { ModalBackgroundContainer, ModalContentContainer, ModalHeader, ModalCloseButton, ButtonContainer } from './styles'

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome tem que ter mais que 3 caracteres')
      return false
    }

    if (quantity < 1) {
      alert('Quantidade não pode ser menor que 1')
      return false
    }
    return true
  }

  const callAddItem = async () => {
    const validate = validateBeforeSave()
    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) })
      if (!result?.error) {
        alert('Item salvo com sucesso')
        onClose()
      }
    }
  }

  const callUpdateItem = async () => {
    const validate = validateBeforeSave()
    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked
      })
      if (!result?.error) {
        alert('Item atualizado com sucesso')
        onClose()
      }
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id)
    if (!result?.error) {
      alert('Item deletado com sucesso')
      onClose()
    }
  }

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name)
      setQuantity(item?.quantity)
    }
  }, [item])

  return (
    <ModalBackgroundContainer>
      <ModalContentContainer>
        <ModalHeader>
          <Title>{item ? 'Item Edit' : 'Add new items'}</Title>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label="Name"
          placeholder="Ex: Açai"
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label="Quantity"
          type="number"
        />
        <ButtonContainer>
          {item && (
            <Button icon="trash" variant="outline" onClick={callDeleteItem}>
              Delete
            </Button>
          )}
          <Button onClick={item ? callUpdateItem : callAddItem}>
            {item ? 'Update' : 'Add'}
          </Button>
        </ButtonContainer>
      </ModalContentContainer>
    </ModalBackgroundContainer>
  )
}
