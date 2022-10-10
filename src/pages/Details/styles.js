import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    
   
  
    > main {
      

        > div {
            .backToPage {
                background: transparent;
                border: none;
                color: ${({ theme   }) => theme.COLORS.GRAY};
                display: flex;
                align-items: center;
                gap: 11px;
                font-weight: 500;
                font-size: 24px;
                margin-top: 24px;
                
                padding-left: 154px;
            }

            svg {
                font-size: 220px;
                color: ${({ theme   }) => theme.COLORS.WHITE};
            }

            @media (min-width: 768px) {
            padding-inline: 0;
  }
        }

       
    }

`;

        export const Content = styled.div`
         display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px 123px;
        
        
        
        .plate {
        width: 390px;
        height: 390px;
       
       margin-left: 105px;
        }

        > .information {
            display: flex;
            flex-direction: column;
            margin-left: 30px;
          

            .description{
                display: flex;
                align-items: center;
                gap: 2rem;
                align-items: center;
                margin-block: 3rem;
            }

            .description h2{
                font-weight: 500;
                font-size: 40px;
                
               
            }

            .description p {
                
                font-size: 24px;
                margin-left: 25px;
                padding: 35px;
               
             
            }

            .ingredients {
                display: flex;
                align-items: center;
                justify-content: start;
                gap: 23px;
                margin-top: 27px;
            }

            .price {
                display: flex;
                align-items: center;
                gap: 40px;
                margin-top: 40px;
                strong {
                    font-weight: 400;
                    font-size: 32px;
                    line-height: 160%;
                    text-align: center;
                    color: #82F3FF;
                }


  .btn {
    
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    position: relative;

    z-index: 2;
  }

  @media (min-width: 768px) {
    padding-inline: 0;
     
    > strong{
      min-width: 14rem;
    } 
  }

}
}
`;