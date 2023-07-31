import { useDispatch } from "react-redux";
import { styled } from "styled-components"
import { decrementProductAmount, incrementProductAmount } from "../stores/cart/cartSlice";

export const ProductSummaryCard = ({product})=>{
    const dispatch = useDispatch();

    return( 
        <ProdSumCardStyled>
            <div className="image">
                <img src={product.imageUrl} alt={product.name}/>
            </div>
            <div className="product_Info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>
            <div className="price_control">
                <div className="price">${product.price}</div>
                <div className="quantity_controls">
                    <button className="decrease" disabled={product.amount <= 0} onClick={()=>dispatch(decrementProductAmount(product))}>-</button>
                    <span className="amount">{product.amount}</span>
                    <button className="increase" onClick={()=>dispatch(incrementProductAmount(product))}>+</button>
                </div>
            </div>
        </ProdSumCardStyled>
    )
}

const ProdSumCardStyled = styled.div`
margin:20px 0;
display:flex;
justify-content:center;
color:black;
img{
    width:300px;
    height:250px;
    object-fit:cover;
    border-radius: 155px 155px 155px 155px;
-webkit-border-radius: 155px 155px 155px 155px;
-moz-border-radius: 155px 155px 155px 155px;
border:1px solid transparent;
}
.product_Info{
    margin:10px 20px;
    h3{
        font-size:25px;
        font-style:bold;
    }
}
.price_control{
    display:flex;
flex-direction:column;
    margin:20px 30px;
    font-style:bold;
    font-size:20px;
    .quantity_controls{
        display:flex;
        justify-content:space-evenly;
    }
}

`;