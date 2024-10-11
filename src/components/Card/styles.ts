import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    width: 416px;
    height: 260px;
    padding: 2rem;
    background-color: ${({ theme }) => theme['base-post']};
    border-radius: 8px;
`

export const CardContentContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1.2rem;
`

export const CardContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    

    & > p {
        display: flex;
        height: 24px;
        gap: 0.3rem;
        font-size: 14px;
        color: ${({ theme }) => theme['text-light']};
        opacity: 0.5;
    }
`

export const CardContentDescription = styled.p`
        color: ${({ theme }) => theme['base-text']};
        font-size: 16px;
        line-height: 24px;
    `