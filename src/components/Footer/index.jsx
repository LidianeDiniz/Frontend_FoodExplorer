import { Container } from './styles';

import LogoFooter from '../../assets/logoFooter.svg';

export function Footer() {
  return (
    <Container>
      <div>
       
        <img src={LogoFooter} alt="Logo do Restaurtante em formato hexagonal" />

        <p>© 2022 - Todos os direitos reservados.</p>
      </div>

      
    </Container>
  );
}
