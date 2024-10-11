import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 54rem;
    margin: 0 auto;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    :last-child {
        margin-bottom: 3rem;
    }
`