import React from 'react'
import { styled } from 'styled-components'
import Button from './elements/Button';

const ProductDetailCard = ({product,onAddProduct}) => {
  return (
    <ProdDetCardStyled>
        <div className='not_Img'>
        <div className='price_Name'>
            <div>
            <h2>{product&&product.name}</h2>
            </div>
            <p>{product.description}</p>
            <div>
            <div className='price'>{product.price}</div>
            </div>
            </div>

        </div>
        <div className='img'>
            <img src={product.imageUrl} alt={product.name} className='image'/>
        </div>
        <div className='addToCartBtn'>
            <Button name={"Add to Cart"} width={"200px"} bpad={"20px"} bMarg={"10px 0"} onClick={onAddProduct}/>
        </div>
    </ProdDetCardStyled>
  )
}

const ProdDetCardStyled = styled.div`
display:flex;
flex-direction:column;
width:600px;
box-shadow: -1px -4px 15px 22px rgba(27,25,18,0.46) inset;
-webkit-box-shadow: -1px -4px 15px 22px rgba(27,25,18,0.46) inset;
-moz-box-shadow: -1px -4px 15px 22px rgba(27,25,18,0.46) inset;
flex-wrap:wrap;
justify-content:center;
margin:20px 0;
.not_Img,h2,p{
    color:black;
    margin:20px 10px;
}
.price_Name{
    display:flex;
    justify-content:space-evenly;
    text-align:center;
    flex-direction:column;
}
h2{
    font-size:25px;
}
p{
    font-size:15px;
    text-align:center;
}

.image{
    width:300px;
    height:200px;
    object-fit:contain;
    display: block;
  margin-left: auto;
  margin-right: auto;
}
.addToCartBtn{
    margin-left: auto;
    margin-right: auto;
}
`;

export default ProductDetailCard
