import React from "react";
import "./Form2.css";
import { Button, ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Form2 = () => {
  return (
    <>
    <ChakraProvider>
      
      <div className="fm2">
      <Container>

     
   
    
      <img
        className="form-6-english-2-1"
        alt=""
        src="/form6-english2-1@2x.png"
        />
      <input
        className="adharcardcheckbox3-icon"
        type="checkbox"
        
        />
      <input className="nofamilymember" type="text" />
      <input className="relwithapplicant" type="text" />
      <input className="epicno" type="text" />
      

      <div className="ab4">
      <Button className="btn-4"><Link to={'/blo'}>Submit</Link></Button>
      <input  className="cb" type="checkbox"/>
      <p >I give Election comission of india right to use my information for government purposes</p>
      </div >
    
        </Container>
        </div>
        </ChakraProvider>
        </>
  
  );
};

export default Form2;
