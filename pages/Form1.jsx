import "./Form1.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Form1 = () => {
  return (
    
    
    

    
   
    <div className="form-6-englishmodifird-1-parent">
      <div className="form-6-englishmodifird-1">
        <img
          className="form-6-englishmodifird-11"
          alt=""
          src="/form6-englishmodifird-1@2x.png"
          />
        <input className="address" type="text" placeholder="Address" />
      </div>
      <input className="aadharno" />
      <input className="first-middlename" />
      <input className="mobself" />
      <input className="namesurnamerelative" />
      <input className="surname" />
      <input className="fmdsurname" />
      <input className="relativemob" />
      <input className="female" type="checkbox" />
      <input className="dob" />
      <input className="aadharcheckbox" type="checkbox" />
      <img className="photoicon" alt="" src="/photo@2x.png" />
      <input className="mother" type="checkbox" />
      <input className="father" type="checkbox" />
      <input className="aadharcheckbox1" type="checkbox" />
      <input className="firstnamefollowedbymiddlename" type="text" />
      <input className="first-name" />
      <input className="male" type="checkbox" />

      <Button className="btn-nx"><Link to={'/form2'}>Next</Link></Button>

      
      
   
    </div>
    
    
    

    
   
    
  );
};

export default Form1;
