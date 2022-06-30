import styled from "styled-components"

export default function Registers({in_out}) {

    function deleteRegister(){
        const confirmDelete = window.confirm("Deseja apagar o registo ?");
    }


    return (
        <Container>
            <div>
                <h3>30/11</h3>
                <h4>Almoço mãe</h4>
            </div>

            <Value in_out={in_out}>
                <h3>39,90</h3>
                <h4 onClick={deleteRegister}>x</h4>
            </Value>
        </Container>
    )
}

const Container=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    div {
        display: flex;
    }
    h3 {
        margin-right: 11px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }
    h4 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
`;
const Value=styled.div`
    > h3 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: ${props => props.in_out ? "#03AC00" : "#C70000"};
    }
    > h4 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #C6C6C6;
    }
`;