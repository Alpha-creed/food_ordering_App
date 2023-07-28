import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productSlice";
import { styled } from "styled-components";

const Menu = ()=>{
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return (
        <MenuStyled>
            <h2>Menu</h2>
            {
                products.status ==="pending"?
                <div>Loading...</div>:
                <div className="menuWrapper">
                    {
                        products.products && products.products[0].products.map((menuCategory,index)=>{
                            return(
                                <>
                                    <h2>{menuCategory.name}</h2>
                                    {/* <div className="products-list">
                                        {
                                            menuCategory.data.products.map((product,index)=>{
                                                return(
                                                    <div>{product.name}</div>
                                                )
                                            })
                                        } */}
                                    {/* </div> */}
                                </>
                            )
                        })
                    }
                </div>
            }
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
color:white;
h2{
    color:white;
}
`;

export default Menu;