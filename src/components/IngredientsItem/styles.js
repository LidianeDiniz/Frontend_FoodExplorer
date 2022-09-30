import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    
    background:  ${({ theme, isNew }) => isNew ? "transparent" : 
    theme.COLORS.BACKGROUND_700};
    color:  ${({ theme }) => theme.COLORS.GRAY_300};


    border: ${({ theme, isNew }) => isNew ? `1px dashed  ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 10px;
    padding-right: 16px;
    
    
    > button {
        border: none;
        background: none;
        color:  ${({ theme }) => theme.COLORS.WHITE};
        
    }
    input {
        height: 32px;
        width: 100px;
        padding: 14px;
       
        color:  ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
         
        font-size: 16px;
       
        
    }
`;