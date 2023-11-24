import { useEffect, useState } from 'react'
import './index.css'
import { Input } from '../Input'
import { Button } from '../Button'
import { createItem, updateItem, deleteItem } from '../../services/request' //ação de deletar - 4

export const Modal = ({ onClose, item }) => {
  //Screen List
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const validateBeforeSave = () => {
    //função geral para add ou update datas
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
    //validando dados
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
    //atualizando dados
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
    //deleteItem - 2
    const result = await deleteItem(item?._id) //deleteItem - 5
    if (!result?.error) {
      alert('Item deletado com sucesso') //mostrar mensagem de sucesso - 7
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
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>{item ? 'Item Edit' : 'Add new items'}</h1>
          <button onClick={onClose} className="modal-close-button" />
        </div>
        <Input
          onChange={(text) => setName(text)} //toda vez que mudar faz o text
          value={name} //valor do input que esta sendo salvo no useState para sempre manter no input
          label="Name"
          placeholder="Ex: Açai"
        />
        <Input
          onChange={(text) => setQuantity(text)} //toda vez que mudar faz o text
          value={quantity} //valor do input que esta sendo salvo no useState para sempre manter no input
          label="Quantity"
          type="number"
        />
        <div className="buttons-container">
          {item && (
            <Button icon="trash" variant="outline" onClick={callDeleteItem}>
              Delete
            </Button>
          )}
          <Button onClick={item ? callUpdateItem : callAddItem}>
            {item ? 'Update' : 'Add'}
          </Button>
        </div>
      </div>
    </div>
  )
}
