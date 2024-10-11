import styled from "styled-components";

export const PostCardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10.5rem;
    margin-top: -5.5rem;
    background-color: ${({ theme }) => theme['base-profile']};
    border-radius: 8px;
`

export const PostCardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    gap: 0.5rem;
`

export const PostCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a {
        display: flex;
        align-items: center;
        font-size: 14px;
        gap: 4px;
        color: ${({ theme }) => theme['blue']};
        text-decoration: none;
        transition: color 0.2s;

        :hover {
            color: ${({ theme }) => theme['blue']};
        }
    }
`

export const PostCardInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Bio = styled.p`
    font-size: 31px;
    color: ${({ theme }) => theme['base-title']};
    margin-top: 0.5rem;
    `

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

` 

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme['base-span']};
    font-size: 14px;
`