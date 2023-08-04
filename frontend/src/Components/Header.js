import foody from "../assest/images/thumb-238653.jpg"
import { cart } from "../assest/icons"
import { Link, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { useEffect, useState } from "react"
import Button from "./elements/Button"

export const Header = ({cartCount}) =>{
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleLogout = ()=>{
        sessionStorage.removeItem("Auth token");
        sessionStorage.removeItem("User Id");
        navigate("/");
    }
    
    useEffect(()=>{
        const checkAuthToken = () =>{
            const token = sessionStorage.getItem('Auth token');
            if(token){
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
        }

        window.addEventListener("storage",checkAuthToken);

        return ()=>{
            window.removeEventListener("storage",checkAuthToken);
        }
    },[])

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
                        {cartCount>0?<div className="cartCount">{cartCount}</div>:null}
                    </Link>
                    {
                        isLoggedIn?
                        <Button name={"Log Out"} onClick={handleLogout} color={"white"} bg={"orange"}/>:
                        (
                        <>
                            <Link to="/login" className="logIn">log In</Link>
                            <Link to ="/register" className="signUp">Sign Up</Link>
                        </>
                        )    
                }
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
            position:relative;
            .cartCount{
                position:absolute;
                color:white;
                background:blue;
                width:30px;
                text-align:center;
                border-radius: 196px 196px 196px 196px;
-webkit-border-radius: 196px 196px 196px 196px;
-moz-border-radius: 196px 196px 196px 196px;
left:5px;
top:-15px;
            }
        }
        .signUp{
            font-size:20px;
            color:white;
        }
    }

}
`;