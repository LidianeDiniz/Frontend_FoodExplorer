import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 275px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: 1px solid white;
    resize: none;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 40px;
    margin-top: 10px;
`;