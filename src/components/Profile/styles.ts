import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    width: 100%;
    height: 13.25rem;
    margin-top: -5.5rem;
    background-color: ${({ theme }) => theme['base-profile']};
    border-radius: 8px;

    & > img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 6px;
        margin: 2rem 2rem 2rem 2.5rem;
    }
`

export const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 4px;
    color: ${({ theme }) => theme['blue']};
    border-bottom: 1px solid ${({ theme }) => theme['blue']};
    text-decoration: none;
`

export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 2.5rem 2rem 2rem 0;
    flex-direction: column;
`

export const ContentHeader = styled.div`
    display: flex;
    
    justify-content: space-between;
    align-items: center;

    & > strong {
        font-size: 24px;
        color: ${({ theme }) => theme['base-title']};
    }
`

export const Bio = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme['base-text']};
    margin-top: 0.5rem;
    `

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
` 

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme['base-text']};
    font-size: 16px;
`