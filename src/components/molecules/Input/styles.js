import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 452px;
  height: 48px;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-style: solid;
  border-width: 2px;
  margin-bottom: 16px;
  @media (max-width: 420px){
    max-width: 300px;
  }
`

export const InputLabel = styled.label`
  font-size: 12px;
  margin: 0px;
  padding-top: 6px;
  padding-left: 6px;
  padding-bottom: 4px;
`

export const InputText = styled.input`
  border: 0px transparent;
  margin-left: 6px;
  font-size: 16px;
  font-family: 'Avenir Next';

  :focus {
    outline: none;
  }
`
