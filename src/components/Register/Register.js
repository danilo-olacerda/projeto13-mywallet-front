import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner';
import axios from "axios";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function register(e) {

        setLoading(true);

        e.preventDefault();
        if (password!==confirmPassword) {
            alert("As senhas não conferem!");
            setLoading(false);
            return;
        }
        const body = {
            name,
            email,
            password,
            confirmPassword
        };

        const promise = axios.post("https://mywallet-back-danilo.herokuapp.com/register", body);

        promise.then(()=> {
          alert("Cadastrado com sucesso!")
          setLoading(false);
          navigate("/");
        }).catch((info)=>{
          alert(info.response.data);
          setLoading(false);
        })
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <form action="submit" onSubmit={register}>
                <input type="name" disabled={loading} placeholder="Nome" required value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" disabled={loading} placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" disabled={loading} placeholder="Senha" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" disabled={loading} placeholder="Confirme a senha" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button type="submit" disabled={loading}>
                    {!loading ? <h3>Cadastrar</h3> : <ThreeDots color="#FFFFFF" height={60} width={60} />}
                </button>
            </form>
            <LoginPage onClick={() => navigate("/")} enabled={loading}>Já tem uma conta? Entre agora!</LoginPage>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #8C11BE;
  width: 100%;
  min-height: 100%;
  form {
    display: flex;
    flex-direction: column;
    width: calc(100% - 50px);
    margin-bottom: 36px;
  }
  h1 {
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-bottom: 24px;
  }
  input {
    border: none;
    margin-bottom: 13px;
    background: #FFFFFF;
    border-radius: 5px;
    height: 58px;
    padding-top: 18px;
    padding-bottom: 17px;
    padding-left: 15px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    outline: none;
  }
  input::placeholder {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: #A328D6;
    border-radius: 5px;
    height: 46px;
    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;
      color: #FFFFFF;
    }
  }
`;
const LoginPage = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  pointer-events: ${props => props.enabled ? "none" : "initial"};
`;