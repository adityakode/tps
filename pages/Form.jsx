import "./Form.css";
import { ChakraProvider } from "@chakra-ui/react/dist";
import { Button } from "@chakra-ui/react/dist";

const Form = () => {
  return (
    <ChakraProvider>
    <div className="form-6-englishmodifird-1-parent">
      <div className="form-6-englishmodifird-1">
        <img
          className="form-6-englishmodifird-11"
          alt=""
          src="/form6-englishmodifird-1@2x.png"
        />
        <input className="address" type="text" />
      </div>
      <textarea className="aadharno" />
      <textarea className="first-middlename" />
      <textarea className="mobself" />
      <textarea className="namesurnamerelative" />
      <textarea className="surname" />
      <textarea className="fmdsurname" />
      <textarea className="relativemob" />
      <input className="female" type="checkbox" />
      <textarea className="dob" />
      <input className="aadharcheckbox" type="checkbox" />
      <img className="photo-icon" alt="" src="/photo@2x.png" />
      <input className="mother" type="checkbox" />
      <input className="father" type="checkbox" />
      <input className="aadharcheckbox1" type="checkbox" />
      <input className="firstnamefollowedbymiddlename" type="text" />
      <textarea className="first-name" />
      <input className="male" type="checkbox" />
     
      <img
        className="form-6-english-2-1"
        alt=""
        src="/form6-english2-1@2x.png"
      />
      <input className="adharcb2nd" type="checkbox" />
      <input className="noffamilymember2" type="text" />
      <input className="relwithapplicant2" type="text" />
      <input className="epic2" type="text" />
      <input className="cbdec" type="checkbox"/>
      
      <Button className="bt">fgfg</Button>
    </div>
    </ChakraProvider>
  );
};

export default Form;
