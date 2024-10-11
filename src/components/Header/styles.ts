import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    height: 18.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: rgb(28,47,65);
    background: radial-gradient(circle, rgba(28,47,65,1) 10%, rgba(17,33,49,1) 58%);

    & > h1 {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 48px;
        color: ${(props) => props.theme['base-title']};
        
    }
`