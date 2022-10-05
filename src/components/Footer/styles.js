import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
   
   
    background: #00111A;

    display: flex;
    align-items: center;
    justify-content: space-between;

    grid-area: footer;
    padding: 17px 123px;

    > div {
        display: flex;
        align-items: center;
        gap: 11px;

        h1 {
            font-weight: 700;
            font-size: 25px;
            color: rgba(255, 255, 255, 0.3)};
    }

    > span {
        font-size: 14px;
        line-height: 18px;
        color: #FFFAF1;
    }
`;