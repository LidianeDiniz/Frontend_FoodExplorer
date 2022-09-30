import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        outline: none;
    }
    a {
        text-decoration: none;
    }
    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;