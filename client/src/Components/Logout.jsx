import React from 'react'
import { Button } from '@mui/material'
export const Logout=()=>{
    const button={marginRight:'20px'}
    return (
        <Button style={button}  color='error' variant='contained'>Logout</Button>
    )
}