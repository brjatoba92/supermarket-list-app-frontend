import { CardContainer, CheckImage, TextContainer, ArrowIconContainer, ArrowIcon } from './styles'
import { SmallText } from 'components/atoms'

export const ListCard = (props) => {
  const { item, onClick, onCheckItem } = props

  return (
    <CardContainer>
      <CheckImage>
        <img
          onClick={() => onCheckItem(item)}
          src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
          alt="checked"
        />
      </CheckImage>
      <TextContainer>
        <SmallText mb={2} align='left'>{item?.name}</SmallText>
        <SmallText fontSize={14} align='left' fontWeight={400}>{item?.quantity} unidades</SmallText>
      </TextContainer>
      <ArrowIconContainer onClick={() => onClick(item)}>
        <ArrowIcon src='/images/arrow.svg' alt='arrow' />
      </ArrowIconContainer>
    </CardContainer>
  )
}
