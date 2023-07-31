import { styled } from "styled-components";
import Alerts from "../../Components/elements/Alert";

const PaymentSuccess = ()=>{
    return (
        <PaySuccessStyled >
            <Alerts severity={"success"} alertTilte={"Success"} alertMessage={"Your payment was successful"}/>
        </PaySuccessStyled>
    )
}

const PaySuccessStyled = styled.div`
color:white;
align-items:center;
display:flex;
justify-content:center;
`;

export default PaymentSuccess;