import foody from "../assest/images/thumb-238653.jpg"
import { cart } from "../assest/icons"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const Header = () =>{
    return(
        <HeaderStyled id="Header" >
            <div className="headerWrapper">
                <div className="imageWrapper">
                   <Link to="/" className="imageLink">
                   <img src={foody} alt="logo" className="image"/>
                   </Link>
                </div>
                <div className="mainWrapper">
                    <Link to="/" className="home">Home</Link>
                    <Link to="#about" className="About">About</Link>
                </div>
                <div className="loginWrapper">
                    <Link to="/cart" className="cart">
                        {cart}
                    </Link>
                    <Link to="/login" className="logIn">log In</Link>
                    <Link to ="/register" className="signUp">Sign Up</Link>
                </div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
.headerWrapper{
    display:flex;
    justify-content:space-around;
    .imageWrapper{
        img{
            width:100px;
            heigth:30px;
            margin:20px 0;
            border-radius:25px;

        }
    }
    .mainWrapper{
        margin:20px 0;
        .home{
            font-size:20px;
            color:white;
            underline:none;
            
        }
        .About{
            font-size:20px;
            color:white;
            margin:0 30px;
        }
    }
    .loginWrapper{
        margin:20px 0;
        .logIn{
            font-size:20px;
            color:white;
            margin:0 30px;

        }
        .cart{
            font-size:20px;
            color:white;
        }
        .signUp{
            font-size:20px;
            color:white;
        }
    }

}
`;