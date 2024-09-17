import React, { useEffect,useState } from 'react'
import axios from '../../../../utils/axios'
const Designations = () => {
const [desiganations, setDesignations] = useState([]);
    useEffect( () => {
        const getDesignations = async () => {

        try {
            const response = await  axios.get("http://172.16.21.29:30001/designations/?offset=0&limit=10");
            console.log("DEsignations REquest ",response);
            setDesignations(response);
        } catch (error) {
            console.error(error);
            
        }
    }
    getDesignations();

    }
    , [])
  return (
   <>
    <h1>Below is the list of designations </h1>


   </>
  )
}

export default Designations