import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  
  
  > img {
    width: 7.2rem;
    height: 7.2rem;
  }

  .ingredient-name {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`