import React from 'react'
import { styled } from 'styled-components'
import {useForm} from "react-hook-form"
import Button from './elements/Button'
import { arrowRight } from '../assest/icons'
import { useDispatch } from 'react-redux'
import { setAddress } from '../stores/userInfo/addressSlice'
import { useNavigate } from 'react-router-dom'

export const AddressForm = ({onTabSwitch}) => {
    const {register,handleSubmit,formState:{errors}}= useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit=(data)=>{
        dispatch(setAddress(data));
        onTabSwitch("Payment");
    }

    return (
    <AddressFormStyled onSubmit={handleSubmit(onSubmit)}>
      <h3>Address for the delivery</h3>
      <div className='address'>
        <label className='streetAddress' for="streetAddress">Street Address</label>
        <input
            {...register('address',{required:true})}
            type="text"
            id="street address"
            placeholder='Street Address'/>
            {errors.address && <span className='req'>This field is required</span>}
      </div>
      <div className='allDet'>
        <div className="cityDet">
            <label className='city'>City</label>
            <input  
                {...register('city')}
                id="city"
                type='text'
                placeholder='City'/>
        </div>
        <div className="cityDet">
            <label className='state'>State</label>
            <input  
                {...register('state')}
                id="state"
                type='text'
                placeholder='State'/>
        </div>
      </div>
      <div className='allDet'>
        <div className="cityDet">
            <label className='country'>Country</label>
            <input  
                {...register('country')}
                id="country"
                type='text'
                placeholder='Country'/>
        </div>
        <div className="cityDet">
            <label className='postalCode'>Postal Code</label>
            <input  
                {...register('postalCode')}
                id="postal code"
                type='text'
                placeholder='Postal Code'/>
        </div>
      </div>
      <div className='btn'>
        <Button  name={arrowRight} bg={"black"} type="submit" width={"150px"} />
      </div>
    </AddressFormStyled>
  )
}

const AddressFormStyled = styled.form`
margin:20px auto;

h3{
    text-align:center;
    font-size:25px;
    padding:10px;
}
label{
    margin:0 20px;
}
.req{
    color:red;
    font-size:15px;
    margin:0 auto;
}
.allDet{
    display:flex;
    justify-content:space-evenly;
}
input{
    padding:10px 70px;
    margin:20px 0;
}
.address,.cityDet{
    display:flex;
    flex-direction:column;
}
.address label{
    margin:10px auto;
    text-align:center;
}
.address input{
    width:500px;
    margin:20px auto;
}
.btn{
    margin:10px auto;
    display:flex;
    justify-content:center;
}
`;

