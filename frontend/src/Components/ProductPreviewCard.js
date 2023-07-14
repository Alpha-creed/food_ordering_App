import AddProduct from "./AddProduct";

const ProductPreviewCard = ({product,onAddProduct})=>{
    
    const addProduct = ()=>{
        //TODO:create after setting up redux state for cart to add product there
    }
    return (
        <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
            <img src={product.imgUrl} alt={product.name}/>
            <h2>{product.name}</h2>
            <p className="mb-2 h-20 line-clamp-4">{product.description}</p>
        </div>
    )
}

export default ProductPreviewCard;      