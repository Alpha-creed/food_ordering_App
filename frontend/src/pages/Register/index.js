import { styled } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {ToastContainer,toast} from 'react-toastify';
import {app} from "../../firebase-config";
import { useForm } from "react-hook-form";
import Button from "../../Components/elements/Button";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"; 

const Register = ()=>{
    let navigate = useNavigate();
    const {register,handleSubmit} = useForm();
    const [loading,setLoading] = useState(false);
    
    const onSubmit =(data)=>{
        console.log(loading,getAuth());
        setLoading(true)
        const authentication = getAuth();
        console.log(loading,authentication);
        let uid ="";
        createUserWithEmailAndPassword(authentication,data.email,data.password)
            .then((response)=>{
                uid = response.user.uid;
                sessionStorage.setItem("User Id",uid);
                sessionStorage.setItem("Auth token",response._tokenResponse.refreshToken)
                window.dispatchEvent(new Event("storage"))
            })
            .catch((error)=>{
                if(error.code === 'auth/email-already-in-use'){
                    toast.error("Email Already in Use")
                }
            })

            fetch("http://localhost:5000/api/create-user",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:data.email,
                    name:data.name,
                    _id:uid
                })
            }).then((response)=>{
                if(response.status === 200){
                    setLoading(false);
                    toast.success("Accept created successfully",{
                        position:"top-right",
                        autoClose:5000,
                        hideProgressBar:false,
                        closeOnClick:true,
                        pauseOnHover:true,
                        draggable:true,
                        progress:undefined,
                        theme:"dark"
                    });
                    navigate('/');
                }else{
                    console.log(response.json());
                }
            }).catch((error)=>{
                setLoading(false);
                console.log(error);
            })
    }
    return (
        <RegisterStyled>
            <div>
                <div></div>
                <div className="overall-form">
                    <h5>Register</h5>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="input name">
                        <label
                            htmlFor="name"
                            className="name_label"
                            >Name</label>
                        <input
                            {...register('name')}
                            id="name"
                            type="text"
                            className="name_input"/>
                    </div>
                    <div className="input email">
                        <label
                            htmlFor="email"
                            className="email_label"
                            >Email</label>
                        <input
                            {...register('email')}
                            id="email"
                            type="email"
                            className="email_input"/>
                    </div>
                    <div className="input password">
                        <label
                            htmlFor="password"
                            className="password_label"
                            >Password</label>
                        <input
                            {...register('password')}
                            id="password"
                            type="password"
                            className="password_input"/>
                    </div>
                    <Button name={loading?"Loading":"Register"} width={"150px"} bMarg={"0px 100px"} bg={"blue"} color={"white"} />
                </form>
                <ToastContainer/>
                </div>
            </div>
        </RegisterStyled>
    )
}

const RegisterStyled = styled.div`
color:white;
background:black;
width:400px;
height:auto;
border:1px solid #A97100;
box-shadow: -2px 4px 20px 1px rgba(193,127,9,0.75);
-webkit-box-shadow: -2px 4px 20px 1px rgba(193,127,9,0.75);
-moz-box-shadow: -2px 4px 20px 1px rgba(193,127,9,0.75);
margin:20px auto;
border-radius: 10px 10px 10px 10px;
-webkit-border-radius: 10px 10px 10px 10px;
-moz-border-radius: 10px 10px 10px 10px;
.overall-form{
    padding:20px 30px;
    h5{
        margin:40px 100px;
        font-size:20px;
    }
    .input{
        margin:40px 0;
    }
    input{
        padding:10px 40px;
        margin:0 20px;
        border:none;
        outline:none;
        color:black;
    }

}
`;
export default Register;