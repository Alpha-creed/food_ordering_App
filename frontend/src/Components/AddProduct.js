import { styled } from "styled-components"
import Button from "./elements/Button";
import { plus } from "../assest/icons";

const AddProduct = ({onAddProduct})=>{
    return(
        <AddProductStyled>
            <Button icon={plus} onClick={onAddProduct} width={"30px"} bg={"yellow"} brad={"200px 200px 200px 200px"} bpad={"0px 0px"} bMarg={"5px 0"}/>
        </AddProductStyled>
    )
}

const AddProductStyled = styled.div`
    display:flex;
    justify-content:end;
`;

export default AddProduct