import styled from "styled-components";

export const Container = styled.section`

  
  width: 100%;
  margin-left: 30px;
  display: flex;
  justify-items: center;
  flex-direction: column;
  position: relative;
  
  transition: all ease 0.5s;

  > h2 {
   
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 200%;
        }
  
    @media (min-width: 768px) {
    padding-inline: 0;
  }
 
`
export const Slider = styled.div`
  position: relative;
 
  
  
  

  > div {
   
   width: 100%;
    display: flex;
    gap: 27px;

   
 
   
  }

  .btn-left, .btn-right {
    position: absolute;
    z-index: 99;
    
    
    overflow: hidden;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
  }

  .btn-left {
    position: absolute;
    left: 0;
    width: 116px;
    height: 448px;
    border: none;
    top: 0;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);

  }

  .btn-right {
   
    position: absolute;
    right: 0;
    width: 116px;
    height: 448px;
    border: none;
    top: 0px;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);

  }

  @media (min-width: 768px) {
    .btn-left, .btn-right {
      display: flex;
      align-items: center;
     
    }

    &:hover {
      .btn-left, .btn-right {
        opacity: 1;
        
      }
    }
  }
`