import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Header } from "../Components/Header";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PaymentSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register";
import Menu from "../pages/Menu";
import { cartProduct } from "../stores/cart/cartSlice";
import { useSelector } from "react-redux";
import { StripeWrapper } from "../Components/PaymentForm";


const Navigation = ()=>{
    const productsInCart = useSelector(cartProduct);
    return(
        <BrowserRouter>
            <Header cartCount={productsInCart ? productsInCart.length:0}/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/payment-success" element={<PaymentSuccess />}/>
                <Route path="/payment-confirm" element={<StripeWrapper/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;