import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <FooterStyled>
      <div className='info-footer'>
        <div className='company'>
            <h2>Company</h2>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
            </ul>
        </div>
        <div className='legal'>
            <h2>Legal</h2>
            <ul>
                <li>
                    <a href="#">Policy</a>
                </li>
                <li>
                    <a href='#'>Licensing</a>
                </li>
                <li>
                    <a href="#">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
      </div>
      <div className='last-footer'>
        <span>© 2022 Food Delivery.All Rights Reserved.</span>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
background:#766F6F;
color:white;
.info-footer{
    display:flex;
    justify-content:space-evenly;
    .company,.legal{
        h2{
            font-size:20px;
            font-style:bold;
            color:#1F1E1E;
            margin:20px 0;
        }
        ul li{
            margin:20px 10px;
        }
    }
    
}
a{
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
}
.last-footer{
    background:#1F1E1E;
    padding:20px 10px;
}
`;

export default Footer
