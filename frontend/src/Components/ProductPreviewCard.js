import { styled } from "styled-components";
import AddProduct from "./AddProduct";

const ProductPreviewCard = ({product,onAddProduct})=>{
    
    const addProduct = ()=>{
        onAddProduct(product)
    }
    return (
        <ProdPrevCardStyled >
            <img src={product.imageUrl} alt={product.name}/>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <AddProduct onAddProduct={addProduct} />
        </ProdPrevCardStyled>
    )
}

const ProdPrevCardStyled = styled.div`
    width:300px;
    padding:20px 10px;
    height:auto;
    color:white;
    background:transparent;
    text-align:center;
    box-shadow: 0px -1px 33px 8px rgba(95,95,95,0.75);
-webkit-box-shadow: 0px -1px 33px 8px rgba(95,95,95,0.75);
-moz-box-shadow: 0px -1px 33px 8px rgba(95,95,95,0.75);
    img{
        object-fit:contain;
        width:300px;
        height:200px;
    }
    h2{
        font-size:20px;
        margin:10px 10px;
    }
    p{
        font-size:15px;
        overflow:hidden;
        text-overflow:ellipsis;
        max-height:100px;
        line-height:1.25;
    }
`;

export default ProductPreviewCard;      