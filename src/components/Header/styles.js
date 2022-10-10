import styled from "styled-components";

export const Container = styled.div`


    padding: 0 123px;
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;
    gap: 32px;
    background: #00111A;
    
    grid-area: header;

   
    >input{
        width: 300px;
    }
    > .logo {
        display: flex;
        align-items: center;
        gap: 15px;
        background: #00111A;
        
        
        h1 {
        font-size: 25px;
        width: max-content;     
        }
    }

    div {
        background: #0D1D25;
        border: none;
    }

    > button {
        width: 216px;
        white-space: nowrap;    
    }

    > .buttonText {
      
       width: 139px;
       height: 26px;
        background: transparent;
        border: none;
        font-weight: 400;
        font-size: 16px;
        color: #C4C4CC;
    }

    > .logout {
        background: transparent;
        border: none;
        padding-top: 36px;
        padding-bottom: 36px;
        display: flex;
        align-items: center;
        width: 32px;
        height: 32px;

        svg {
            font-size: 32px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

    @media(max-width: 600px) {
        width: 100%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 130px;
        
        button {
            display: none;
        }

        .logout {
            display: none;
        }

        > .logo {
            display: none;
        }

        
    }
`;