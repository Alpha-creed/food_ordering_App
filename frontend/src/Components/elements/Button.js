import React from 'react'
import { styled } from 'styled-components';

const Button = ({name,onClick,bg,bpad,icon,width,color,bMarg,brad}) => {
  return (
    <ButtonStyled style={{
        background:bg,
        padding:bpad,
        width:width,
        color:color,        
        borderRadius:brad,
        margin:bMarg,
    }} onClick={onClick}>
       {icon}{name}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    border:none;
    outline:none;
    font-size:20px;
    width:100px;
    heigth:auto;
    justify-content:center;
    background:#F9A807;
    color:white;
    border-radius:25px;
    margin:0 20px;
    padding:20px 30px;
`;

export default Button
