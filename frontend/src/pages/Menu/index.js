import {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productSlice";
import { styled } from "styled-components";
import ProductDetailCard from "../../Components/productDetailCard";
import { Tabs } from "../../Components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

const Menu = ()=>{
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [activeTab,setActiveTab] = useState('');
    const [activeTabIndex,setActiveTabIndex] = useState(0);

    useEffect(()=>{
        dispatch(fetchProducts())
        {console.log(products);}
    },[])

    const addProduct =(product)=>{
        dispatch(addToCart(product))
    } 

    const onTabSwitch = (newActiveTab)=>{
        setActiveTab(newActiveTab);
        let newIndex=0
        let categories = products.products.map((product)=>product.name.name);
        let index = categories.findIndex( category=>newActiveTab ===category);
        console.log(index)
        if(index >-1){
            setActiveTabIndex(index);
        }else{
            setActiveTabIndex(0);
        }
        ++newIndex;
    }
    return (
        <MenuStyled>
            <h2>Menu</h2>
            {
               products.status !=="fulfilled" ?
                <div>Loading...</div>:
                <div className="menuWrapper">
                    {
                    products.products &&
                        <Tabs
                            list={products.products.map((product)=>product.name.name)}
                            activeTab={activeTab}
                            onTabSwitch={onTabSwitch}/>
                    }
                     <div className="contentWrapper">
                    {
                        products.products && products.products[activeTabIndex].products.map((product,index)=>{
                            return(
                                <ProductDetailCard key={index} product={product} onAddProduct={addProduct}/>
                            )
                        }) 
                        
                    }
                    </div>
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
.menuWrapper{
    background:white;
    .contentWrapper{
        display:flex;
    }
}
`;

export default Menu;