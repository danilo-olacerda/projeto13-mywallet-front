import styled from "styled-components";
import exit_logo from "../../assets/exit-icon.png";
import add_icon from "../../assets/add-icon.png";
import delete_icon from "../../assets/delete-icon.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Registers from "./Registers.js";

export default function Home() {

    const [registers, setRegisters] = useState([]);
    const navigate = useNavigate();

    function toPage(page){
        //navigate(page);
    }

    return (
        <Container>
            <Name>
                <h3>Olá, Fulano</h3>
                <img src={exit_logo} alt="" />
            </Name>
            <Register registers={registers}>
                {registers.length===0 ? <p>Não há registros de entrada ou saída</p> : registers.map((data, i)=> <Registers key={i} in_out={data.in_out}/>)}
                <Balance registers={registers}>
                    <p>SALDO</p>
                    <h5>255,55</h5>
                </Balance>
            </Register>
            <Buttons>
                <AddButton onClick={() => toPage("/entry")}>
                    <img src={add_icon} alt="" />
                    <p>Nova entrada</p>
                </AddButton>
                <DeleteButton onClick={() => toPage("/out")}>
                    <img src={delete_icon} alt="" />
                    <p>Nova saída</p>
                </DeleteButton>
            </Buttons>
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
`;

const Name = styled.div`
    margin-top: 25px;
    margin-bottom: 22px;
    width: calc(100% - 50px);
    display: flex;
    justify-content: space-between;
    h3 {
        font-weight: 600;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    img {
        width: 23px;
        height: 24px;
    }
`;

const Register = styled.div`
    position: relative;
    min-height: 446px;
    width: calc(100% - 50px);
    background: #FFFFFF;
    border-radius: 5px;
    display: ${props => props.registers.length===0 ? "flex" : "initial"};
    align-items: center;
    justify-content: center;
    margin-bottom: 13px;
    padding-top: 23px;
    padding-left: 12px;
    padding-bottom: 35px;
    padding-right: 10px;
    p {
        width: 60%;
        word-wrap: break-word;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`;
const Buttons = styled.div`
    margin-bottom: 16px;
    display: flex;
    width: calc(100% - 35px);
    p {
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        width: 50%;
        word-wrap: break-word;
    }
    img {
        width: 25px;
        height: 25px;
    }
`;

const AddButton = styled.div`
    width: 50%;
    min-height: 114px;
    background: #A328D6;
    border-radius: 5px;
    margin-left: 7.5px;
    margin-right: 7.5px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DeleteButton = styled.div`
    padding: 8px;
    width: 50%;
    min-height: 114px;
    background: #A328D6;
    border-radius: 5px;
    margin-left: 7.5px;
    margin-right: 7.5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Balance=styled.div`
    display: ${props => props.registers.length===0 ? "none" : "flex"};
    justify-content: space-between;
    width: calc(100% - 22px);
    position: absolute;
    bottom: 10px;
    left: 12px;
    p {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
        width: auto;
    }
    h5 {
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        text-align: right;
        color: #03AC00;
    }
`;