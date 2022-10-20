import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 512px;
   
    

    background: rgba(0, 0, 0, 0.32);
    border: 1px solid rgba(0, 0, 0, 0.65);
    border-radius: 8px;
   
    padding-inline: 10% ;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-left: 27px;
   
    position: relative;

    > img {
        width: 245px;
        height: 245px;
        opacity: 89%;
        border-radius: 50%;
        transform: scale(0.9);
        transition: all ease 0.2s;
        cursor: pointer;
        align-items: center;
        
    }

    > img:hover{
        transform: scale(1);
    }

    > button {
        width: 100%;
        height: 81px;
        border: none;
        background: transparent;
        display: flex;
        font-size: 16px;
        align-items: center;
        justify-content: center;
        gap: 1.4rem;
        border-bottom: 36px;
       

        h3 {
            color: ${({theme}) => theme.COLORS.WHITE};
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 4px;
           
        } 
    }

    > p {

            width: 220px;
            height: 44px;
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            justify-content: center;
            color: ${({theme}) => theme.COLORS.GRAY_200};
            
    }

    > strong {
        width: 220px;
        height: 51px;
        margin-top: 16px;

        font-weight: 400;
        font-size: 32px;
        color: ${({theme}) => theme.COLORS.BLUE};
       
        
    }

    > div {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 36px;
        

        span {
            font-size: 20px;
        }

        span:nth-child(2) {
            font-weight: 700;
            font-size: 20px;
        }
    }

    >.favorites {
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        position: absolute;
        top: 0;
        margin-left: 100px;
        
    }

    >.edit-plate {
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        padding-right: 250px;
        position: relative;
        top: 25px;
       
        
    }
`;