import { useSelector } from "react-redux";
import { Tabs } from "../../Components/Tabs";
import Button from "../../Components/elements/Button";
import { arrowRight } from "../../assest/icons";
import { styled } from "styled-components";
import useTabsSwitch from "../../hooks/useTabsSwitch";
import { cartProduct } from "../../stores/cart/cartSlice";
import { AddressForm } from "../../Components/AddressForm";
import { ProductsSummary } from "../../Components/ProductSummary";
import { StripeWrapper } from "../../Components/PaymentForm";


const Cart = ()=>{
    const cart = useSelector(cartProduct);
    const tabs = ['Summary','Delivery','Payment'];
    const [currentTab,handleTabSwitch] = useTabsSwitch(tabs,'Summary')
    console.log(cart);

    if(!cart || cart.length === 0){
        return(
            <BefCartStyled >
                <h1>Your Cart is Empty</h1>
            </BefCartStyled>
        )
    }

    return (
        <CartStyled>
            <Tabs  className = 'tabs' list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab}/>
            <div className={`tabs ${currentTab !=='Summary'?"hidded ":""}`}>
                <ProductsSummary/>
                <Button className="btn" name={arrowRight} bg={"black"} type="submit" width={"150px"} onClick={()=> handleTabSwitch("Delivery")}/>
            </div>
            <div className={`tabs ${currentTab !=='Delivery'?"hidded":""}`}>
                <AddressForm onTabSwitch={handleTabSwitch}/>
            </div>
            <div className={`tabs ${currentTab !=='Payment'?"hidded":""}`}>
                <StripeWrapper/>
                
            </div>
        </CartStyled>
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
const CartStyled = styled.div`
background:white;
color:black;
heigth:6000px;
width:auto;
margin:10px 200px;border-radius: 33px 34px 4px 4px;
-webkit-border-radius: 33px 34px 4px 4px;
-moz-border-radius: 33px 34px 4px 4px;
border:1px solid transparent;
.hidded{
    display:none;
    position:relatve;

}


`;


export default Cart;