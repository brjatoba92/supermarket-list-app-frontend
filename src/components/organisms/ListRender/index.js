import { Subtitle } from 'components/atoms'
import { ListCard } from 'components/molecules'
import { ListRenderContainer } from './styles'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.lenght === 0) {
    return (
      <Subtitle>
        Sua lista esta vazia, clique no botão "Adicionar" para incluir novos
        itens
      </Subtitle>
    )
  }

  return (
    <ListRenderContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </ListRenderContainer>
  )
}
