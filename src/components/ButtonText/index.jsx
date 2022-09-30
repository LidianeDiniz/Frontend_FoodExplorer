import { Container } from './styles';

export function ButtonText({ title, icon : Icon, ...rest}) {
    return(
        <Container {...rest}
        type="button">
            {Icon && <Icon size={18} />}
            {title}
        </Container>
    );
} 