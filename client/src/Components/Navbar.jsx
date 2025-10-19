import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar,Typography,Toolbar,Button} from "@mui/material"
import { Logout } from './Logout'
export const Navbar=()=>{
    const button={marginRight:'20px'}
    return (
        <>
        <AppBar>
            <Toolbar>
                <Typography sx ={{flexGrow:1}}>
                    Tech Coffe break
                </Typography>
                 <Button style={button} color='warning' variant='contained' to="/login" component={Link}>Login</Button>
                <Button style={button}  color='success' variant='contained' to="/signup" component={Link}>Signup</Button>
            <Logout/>
            </Toolbar>
        </AppBar>
        </>
    )
}