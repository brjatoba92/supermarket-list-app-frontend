import styled from 'styled-components'

export const ScreenContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

export const ContantContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 552px;
    height: 720px;
    border-radius: 24px;
`

export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'bag'
})`
    width: 220px;
    height: auto;
`

export const Title = styled.h1`
    max-width: 320px;
    text-align: center;
`

export const Subtitle = styled.h3`
    max-width: ${({ mw }) => mw || 320}px;
    text-align: ${({ align }) => align || 'center'};
    margin-bottom: ${({ mb }) => mb || 48}px;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 452px;
    margin-top: 24px;
`
