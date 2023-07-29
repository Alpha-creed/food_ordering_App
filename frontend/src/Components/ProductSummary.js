import { useSelector } from "react-redux";
import { styled } from "styled-components"
import { cartProduct } from "../stores/cart/cartSlice";

export const ProductsSummary = ()=>{
    const cart = useSelector(cartProduct);
    return (
        <ProdSummary>

        </ProdSummary>
    )
}

const ProdSummary = styled.div``;