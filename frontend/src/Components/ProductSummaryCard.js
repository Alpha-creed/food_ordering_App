import { styled } from "styled-components"

export const ProductSummaryCard = ({product})=>{
    return(
        <ProdSumCardStyled>
            <div className="image">
                <img src={product.imageUrl} alt={product.name}/>
            </div>
            <div className="product_Info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>
            <div>
                <div className="price">{product.price}</div>
                <div className="quantity_controls">
                    <button className="decrease" disabled={product.amount <= 0} onClick={()=>console.log("decrement")}>-</button>
                    <span className="amount">{product.amount}</span>
                    <button className="increase" disabled={product.amount<=0} onClick={()=>console.log("increment")}>+</button>
                </div>
            </div>
        </ProdSumCardStyled>
    )
}

const ProdSumCardStyled = styled.div``;