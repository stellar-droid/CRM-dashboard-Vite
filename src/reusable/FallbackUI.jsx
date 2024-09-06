import React from 'react'
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom' 


const FallbackUI = ({error}) =>{
 const navigate = useNavigate()

 const handleNavigate = () =>{
    window.location.reload();
 }

 
    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}> 
        <h1>ERROR: </h1>
        <p> {error.message} </p>

         <Button variant="outlined" onClick = {handleNavigate}> Reset</Button>
        </div>
    )
}
export default FallbackUI;