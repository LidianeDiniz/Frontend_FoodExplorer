import { useState } from 'react';
import { Container, Form } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import { api } from '../../service/api';

export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        if(password.length < 6) {
            return alert("A senha deve conter no minímo 6 caracteres!");
        }
        
        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            }else {
                alert("Não foi possível cadastrar!");
            }
        })
    }

    return (
        <Container>

            <div>
                <img src={Logo} alt="logo explorer" />
                <h1>food explorer</h1>
            </div>

            <Form>

                <h1>Crie sua conta</h1>

                <label htmlFor="userName">Seu nome</label>
                <Input 
                type="text" 
                id="userName" 
                placeholder="Exemplo: Maria da Silva"
                onChange={e => setName(e.target.value)}
                />

                <label htmlFor="userEmail">Email</label>
                <Input 
                type="email" 
                id="userEmail" 
                placeholder="Exemplo: exemplo@exemplo.com.br"
                onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="userPassword">Senha</label>
                <Input 
                type="password" 
                id="userPassword" 
                placeholder="No mínimo 6 caracteres"
                onChange={e => setPassword(e.target.value)}/>

                <Button 
                className="button-form" 
                title="Criar conta"
                onClick={handleSignUp}/>

                <Link to="/">Já tenho uma conta</Link>
            </Form>

        </Container>
    );
}