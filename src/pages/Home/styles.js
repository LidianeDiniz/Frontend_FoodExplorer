import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
  margin-inline: auto;
   
`;

export const Content = styled.div`
    max-width: 136.8rem;
    display: block;
     margin-top: 150px;

    > div {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 18px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 8px;
        height: 260px;
        position: relative;

        div {
            margin-right: 47px;
        }

        img {
            position: absolute;
            bottom: 0;
            left: -53px;
            display: inline-block;
        }

    }

    @media (max-width: 1100px) {
        width: 100%;
        padding: 64px;
        margin: auto;

        > div {

            width: 800px;
            justify-content: center;
            text-align: center;

            img {
                display: none;
            }
        }
    }

    @media (max-width: 900px) {
        max-width: 400px;
        padding-top: 64px;
        margin: auto;

        > div {

            width: 400px;
            justify-content: center;
            text-align: center;

            img {
            display: none;
            }
        }
    }
`;