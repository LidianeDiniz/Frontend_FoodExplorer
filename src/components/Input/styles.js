import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
    
    border: 1px solid ${({theme}) => theme.COLORS.WHITE};
    border-radius: 10px;
    
    height: 56px;
    
    
    > input {
        height: 56px;
        width: 100%;;
        padding: 12px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        font-size: 18px;
       
      
        

    
        
    }
    > svg {
        margin-left: 18px;
    }
`;