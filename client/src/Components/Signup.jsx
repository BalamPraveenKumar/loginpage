import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, Grid,Paper, TextField, Typography } from '@mui/material'
export const Signup=()=>{
     const heading = {
    fontSize: '2rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#333',
  };

  const paperStyle = {
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  };

  const row = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  };

  const BtnStyle = {
    marginTop: '1.5rem',
    alignSelf: 'center',         // centers the button horizontally
    width: '30%',
    minHeight:"40px",                // make it narrower and centered
    background: 'linear-gradient(90deg, #0072ff 0%, #00c6ff 100%)',
    color: '#fff',
    fontWeight: 600,
    padding: '0.8rem',
    borderRadius: '0.5rem',
    textTransform: 'none',
  };
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
const navigate=useNavigate();
const handleSubmit=(e)=>{
e.preventDefault();
axios.post("http://localhost:3001/signup",{name,email,password})
.then(result=>{
if(result.status==201){
console.log("User Created Successfully");
navigate('/login');
}
})
.catch(err=>{
  if(err.response && (err.response.status==400)){
window.alert("Email already exists. Please use different Email");
  }else{
    console.log(err);
  }
})
}

  return (
      <>
      <Grid >
        <Paper style={paperStyle} sx = {{
            width:{
            xs:"80vw",
             sm:"50vw",
            md:"40vw",
            lg:"30vw",
             xl:"20vw",
            },
            height:'60vh',
            backgroundColor: '#ffffff',
          borderRadius: 2,
          p: 3,
            
            }}>
              <Typography style={heading} >Signup</Typography>
              <form onSubmit={handleSubmit}>
                <TextField onChange={(e)=>setName(e.target.value)} name='name' style={row} type='text' label="Enter Name"></TextField>
                <TextField onChange={(e)=>setEmail(e.target.value)} name='email' style={row} type="email" label="Enter Email"></TextField>
                <TextField onChange={(e)=>setPassword(e.target.value)} name='password' style={row} type="password" label="Enter Password"></TextField>
                <Button type="submit" variant='contained' style={BtnStyle}>SignUp</Button>
              </form>

        </Paper>
      </Grid>
      </>
    )
}