import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner';
import axios from "axios";
import {useContext} from "react";
import UserContext from "../../contexts/UserContext.js";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {setToken} = useContext(UserContext);

  function send(e) {
    e.preventDefault();
    setLoading(true);
    const body = {
      email,
      password
    };
    
    const promise = axios.post("http://localhost:5000/login", body);
    promise.then((res)=>{
        setToken(res.data);
        navigate("/home");
        setLoading(false);
      })
      .catch((res)=>{
        alert(res.response.data);
        setLoading(false);
      });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <form action="submit" onSubmit={send}>
        <input type="email" disabled={loading} placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" disabled={loading} placeholder="Senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" disabled={loading}>
          {!loading ? <h3>Entrar</h3> : <ThreeDots color="#FFFFFF" height={60} width={60} />}
        </button>
      </form>
      <RegisterPage onClick={() => navigate("/register")} enabled={loading}>Primeira vez? Cadastre-se!</RegisterPage>
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

const RegisterPage = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  pointer-events: ${props => props.enabled ? "none" : "initial"};
`;