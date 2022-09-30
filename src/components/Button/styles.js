import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background: ${({theme}) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 56px;
    border: none;
    border-radius: 10px;
    padding: 16px 37px 16px 37px;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    &:disabled {
        cursor: auto;
        opacity: 0.5;
    }
`;