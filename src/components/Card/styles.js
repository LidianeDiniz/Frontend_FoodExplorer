import styled from "styled-components";

export const Container = styled.div `
    width: 300px;
    height: 512px;

    background: rgba(0, 0, 0, 0.32);
    border: 1px solid rgba(0, 0, 0, 0.65);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    > img {
        width: 176px;
        height: 176px;
        border-radius: 50%;
    }

    > button {
        border: none;
        background: transparent;
        margin-top: 18px;
        margin-bottom: 18px;

        h3 {
            color: ${({theme}) => theme.COLORS.WHITE};
            font-weight: 700;
            font-size: 24px;
        } 
    }

    > p {
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            color: ${({theme}) => theme.COLORS.GRAY_200};
            margin-bottom: 16px;
    }

    > strong {
        font-weight: 400;
        font-size: 32px;
        color: ${({theme}) => theme.COLORS.BLUE};
        margin-bottom: 18px;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 18px;
        

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
        right: 20px;
    }

    >.edit-plate {
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        position: absolute;
        top: 0;
        left: 20px;
    }
`;