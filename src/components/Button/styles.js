import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 48px;
    background: ${({theme}) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    border-radius: 10px;
    padding: 12px 24px;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    &:disabled {
        cursor: auto;
        opacity: 0.5;
    }
`;