import { Container } from './styles';

export function Textarea( { title, value, ...rest }){
    return(
        <Container {...rest}>
            {value}
        </Container>
    );
}