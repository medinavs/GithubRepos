import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => props.theme['base-background']};
        color: ${({ theme }) => theme['base-text']};
    }

    body, input, button, textarea {
        font: 400 16px 'Nunito', sans-serif;
    }
`