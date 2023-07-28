import { styled } from "styled-components"
import banner from "../assest/images/thumb-253181.jpg"
import Button from "./elements/Button"
import { plus } from "../assest/icons"

 const Banner = () =>{
    return(
        <BannerStyled >
            <div className="textWrapper">
                <h2 className="motto">
                    Food Ordering Made Easy
                </h2>
                <p className="text_after_motto">
                    Get Started Today!
                </p>
            
            <div className="btn-container">
                <Button name={"Order now"}   bpad={"5px 25px"} width={"150px"}/>
                <a href="/menu" className="menu">
                    See Menu
                </a>
            </div>
            </div>
            <div className="bannerWrapper">
                <img src={banner} alt="banner"/>
            </div>
        </BannerStyled>
    )
}

const BannerStyled = styled.div`
display:flex;
justify-content:space-evenly;
margin:50px 0;
.textWrapper{
    h2{
        font-size:40px;
        color:white;
    }
    .menu{
        font-size:20px;
        color:yellow;
    }
    p{
        font-size:30px;
        color:red;
        margin:10px 0px;
    }
    .btn-container{
        .menu{
        
        }
    }
}
.bannerWrapper{
    img{
        height:200px;
        object-fit:cover;
    }
}

`;
export default Banner;