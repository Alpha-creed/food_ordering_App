import { useSelector } from "react-redux";
import { Tabs } from "../../Components/Tabs";
import Button from "../../Components/elements/Button";
import { arrowRight } from "../../assest/icons";
import { selectAllProducts } from "../../stores/menu/productSlice";
import { styled } from "styled-components";


const Cart = ()=>{
    const cart = useSelector(selectAllProducts);
    const tabs = ['Summary','Delivery','Payment'];
    console.log(cart);

    if(!cart || cart.products.length === 0){
        return(
            <BefCartStyled >
                <h1>Your Cart is Empty</h1>
            </BefCartStyled>
        )
    }

    return (
        <div className="text-white">Cart</div>
    )
}

const BefCartStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100%;
background:white;
h1{
    font-size:30px;
    color:black;
    text-align:center;
}
`;
const CartStyled = styled.div``;


export default Cart;