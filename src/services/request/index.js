import { api } from 'services/api'

export const getList = async () => {
  try {
    const result = await api.get('/list-items')
    return result.data
  } catch (error) {
    alert('Erro ao buscar dados da API')
    return { error }
  }
}
export const createItem = async (item) => {
  try {
    const result = await api.post('/list-item', {
      ...item
    })
    return result.data
  } catch (error) {
    alert('Erro ao criar novo item')
    return { error }
  }
}

export const updateItem = async (id, item) => {
  try {
    const result = await api.put(`/list-item/${id}`, {
      ...item
    })
    return result.data
  } catch (error) {
    alert('Erro ao salvar novo item')
    return { error }
  }
}

export const deleteItem = async (id) => {
  try {
    const result = await api.delete(`/list-item/${id}`)
    return result.data
  } catch (error) {
    alert('Erro ao deletar novo item')
    return { error }
  }
}
