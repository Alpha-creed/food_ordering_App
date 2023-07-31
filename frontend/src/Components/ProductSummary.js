import { useSelector } from "react-redux";
import   { styled } from "styled-components"
import { cartProduct } from "../stores/cart/cartSlice";
import { ProductSummaryCard } from "./ProductSummaryCard";

export const ProductsSummary = ()=>{
    const cart = useSelector(cartProduct);
    return (
        <ProdSummary>
            {
                cart && cart?.map((product,index)=>{
                    return (
                        <ProductSummaryCard product={product} key={index}/>
                    )
                })
            }
        </ProdSummary>
    )
}

const ProdSummary = styled.div``;