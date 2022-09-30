import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
  
    
    > div {
        display: flex;
        align-items: center;
        gap: 19px;
    }

    @media (max-width: 860px) {
        display: block;
        width: 100%;
        margin: 0 auto;
        > div {
            display: none;
        }
    }
`;

export const Form = styled.form`
    width: 476px;
    height: 600px;
    margin-top: 96px;
    padding: 64px;
    border-radius: 16px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};

    display: flex;
    flex-direction: column;
    gap: 8px;

    > h1 {
        margin-bottom: 31px;
        text-align: center;
    }

    > label {
        font-weight: 400;
        font-size: 16px;
        
    }

    > a {
        text-align: center;
        margin-top: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > .button-form {
        margin-top: 18px;
    }

    @media (max-width: 500px) {
        margin-top: 0;
        width: 100%;
        height: 100vh;  
    }
`;