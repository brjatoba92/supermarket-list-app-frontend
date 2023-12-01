import styled from 'styled-components'

export const ModalBackgroundContainer = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.darkTransparent};
`

export const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 26vw;
    background-color: ${({ theme }) => theme.colors.white};
    padding-top: 16px;
    padding-left: 24px;
    padding-right: 24px;

    @media (max-width: 1300px){
        width: 60vw;
    }

    @media (max-width: 830px){
        width: 60vw;
    }

    @media (max-width: 420px) {
        width: 100vw;
    }
`

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 24px;
`

export const ModalCloseButton = styled.button`
    width: 24px;
    height: 24px;
    background-image: url('../../../public/images/close.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    border: 0px;
    cursor: pointer;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 12vh;
    justify-content: space-between;
    margin-top: 64vh;
    
    @media (max-width: 420px){
        margin-top: 42vh;
        height: 18vh;
        align-items: center;
    }
`
