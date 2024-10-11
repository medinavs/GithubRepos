import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    margin-top: 8rem;
    gap: 0.4rem;
    flex-direction: column;
`

export const SearchHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Search = styled.input`
    width: 100%;
    height: 3.125rem;
    border-radius: 0.4rem;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme['base-input']};
    transition: border 0.2s;
    outline: none;
    border: none;
    color: ${({ theme }) => theme['base-text']};
    
    &::placeholder {
        opacity: 0.5;
        color: ${({ theme }) => theme['base-text']};
    }

    &:focus {
        border: 1px solid ${({ theme }) => theme['blue']};
    }
`