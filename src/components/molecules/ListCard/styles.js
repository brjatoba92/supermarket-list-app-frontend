import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 58px;
    min-height: 58px;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 12px;
    margin-bottom: 24px;
    padding: 0px 12px;
`

export const CheckImage = styled.image`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor:pointer;
    position: relative;
    margin-right: 12px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`

export const ArrowIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 10%;
    cursor: pointer;
`

export const ArrowIcon = styled.image`
    width: 6px;
    height: 12px;
    object-fit: contain;
`
