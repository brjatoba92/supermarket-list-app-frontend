import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { Button, Input } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import { ScreenContainer, ContantContainer, BagImage, Title, Subtitle, ButtonContainer } from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const onClickContinue = () => {
    if (username.length < 4) {
      alert('Username deve ter mais que tres caracteres')
      return
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ContantContainer>
        <BagImage />
        <Title>
          {' '}
          Sua lista de supermercado mais fácil do que nunca{' '}
        </Title>
        <Subtitle>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </Subtitle>
        <Subtitle mw={452} align={'left'} mb={16}>
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </Subtitle>
        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="usuario23"
        />
        <ButtonContainer>
          <Button onClick={onClickContinue}>Continuar</Button>
        </ButtonContainer>
      </ContantContainer>
    </ScreenContainer>
  )
}
