import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const PersonRegister = () => {

  const navigate = useNavigate();

  let[account,setAccount] = useState({
    email:"",
    number:""
  });
  
    

    

    let[formError,setFormError] =useState({
        email: false,
        number:false

    }) 

  const SubmitForm = () =>{

    // alert("successfully submitted");
  
  

    setFormError({
        email:account.email === ""? true:false,
        number:account.number === ""? true:false

    })

    
    console.log(account);

    navigate("/fill")

  }
  

  const handlingInput = (event) => {
    setAccount({...account,[event.target.id]:event.target.value});

  
     
  }
    return(
        <div className="label1">
         <h3>Register Account</h3>
         <div>
         <label className="label1">Email Address : </label>
         <input type="text"  onChange={handlingInput}  placeholder="Please Enter your Email"  id="email" maxLength={30}     className="input"/>
         { formError.email &&<p className="error">Please Enter a valid Email Address </p>}
         </div>
         <div>
            <label className="label1">Mobile Number :</label>
            <input type="text"  placeholder="Enter 10 digit Mobile number" id="number" maxLength={10} onChange={handlingInput}  className="input"/>
           {formError.number && <p className="error">Please Enter a Mobile Number</p>}
         </div>
         <div className="label1">
            <button onClick={()=> SubmitForm ()}>Submit </button>
         </div>

        </div>
    )
}

export default PersonRegister;