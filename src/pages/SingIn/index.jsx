import { useState } from 'react';
import { Container, Form } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth';

export function SingIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({email, password});
        setLoading(true);
    }

    return (
        <Container>

            <div>
                <img src={Logo} alt="logo explorer" />
                <h1>food explorer</h1>
            </div>

            <Form>

                <h1>Faça login</h1>

                <label htmlFor="userEmail">Email</label>
                <Input 
                type="email" 
                id="userEmail" 
                placeholder="Exemplo: exemplo@exemplo.com.br"
                onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="userPassword">Senha</label>
                <Input 
                type="password" 
                id="userPassword" 
                placeholder="No mínimo 6 caracteres"
                onChange={e => setPassword(e.target.value)}/>

                <Button 
                className="button-form" 
                title="Entrar"
                loading={loading}
                onClick={handleSignIn}/>

                <Link to="/register">Criar uma conta</Link>
            </Form>

        </Container>
    );
}