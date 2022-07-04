import styled from "styled-components";
import { useState } from "react";
import {useContext} from "react";
import UserContext from "../../contexts/UserContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Out(){

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    
    async function addOut(e){
        e.preventDefault();
        const body = {
            value,
            description,
            in_out: false
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        await axios.post("https://mywallet-back-danilo.herokuapp.com/newinout", body, config);
        navigate("/home");
    }

    return (
        <Container>
            <Text>Nova saída</Text>
            <form action="submit" onSubmit={addOut}>
                <input type="number" placeholder="Valor" min="0.01" step="0.01" required value={value} onChange={(e) => setValue(e.target.value)}/>
                <input type="text" placeholder="Descrição" required value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button type="submit">
                    <h3>Salvar saída</h3>
                </button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8C11BE;
    width: 100%;
    min-height: 100%;
    form {
        display: flex;
        flex-direction: column;
        width: calc(100% - 50px);
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
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 23px;
      color: #FFFFFF;
      }
    }
`;

const Text = styled.div`
    margin-top: 25px;
    margin-bottom: 40px;
    width: calc(100% - 50px);
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`;