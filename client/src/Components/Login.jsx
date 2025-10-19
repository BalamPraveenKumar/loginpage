import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Grid,Paper, TextField, Typography } from '@mui/material'
export const Login=()=>{
const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
const handlelogin=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/login",{email,password})
    .then(result=>{
        if(result.data=="Success"){
            navigate("/home");
        }else{
            alert("login failed ")
        }

    }).catch(err=>console.log(err));
}



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
    return (
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
              <Typography style={heading} >Login</Typography>
              <form onSubmit={handlelogin}>

                <TextField onChange={(e)=>setEmail(e.target.value)} name='email' style={row} type="email" label="Enter Email"></TextField>
                <TextField onChange={(e)=>setPassword(e.target.value)} name='password' style={row} type="password" label="Enter Password"></TextField>
                <Button type="submit" variant='contained' style={BtnStyle}>Login</Button>
              </form>

        </Paper>
      </Grid>
    )
}