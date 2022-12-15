import React, { useState } from "react";




const FillNumber = () => {


    const[currentAmount,setCurrentAmounnt] = useState({
        currentam:""
    });
    const[interestRate, setInterestRate] = useState({
        interest:""
    });
    const [numMonths,setNumMonth] = useState({
        nummon:"12"
    });
    const[monthlyPayment,setMonthlyPayment] = useState({
        monthpay:""
    });
    const calculate = (event) => {
        event.prevenDefault();
        const fromValid = 
        +currentAmount>= 0 &&
        0 <= +interestRate&&
        + interestRate <= 100 &&
        numMonths>0;
        if(!fromValid){
            return;
        }
        setMonthlyPayment((+currentAmount*(1 + +interestRate/100))/+numMonths)
    }


    


    let[fillAccount,setFillAccount] = useState({
        name :"",
        address:"",
        pan:"",
        employed:"",
        current:"",
        loan:"",
        month:"",
        previous:"",
        house:"",
        rent:"",
        expense:"",
        emi:"",
        previoushike:"",
        estimate:"",
        bank:""
    })

    let[fillError,setFillError] =useState({
        name:false,
        address:false,
        pan:false,
        employed:false,
        current:false,
        loan:false,
        month:false,
        previous:false,
        house:false,
        rent:false,
        expense:false,
        emi:false,
        previoushike:false,
        estimate:false,
        bank:false
    })
    

    


     const FillSubmit = () =>{
        console.log(fillAccount);

        setFillError({
            name:fillAccount.name ===""? true:false,
            address:fillAccount.address ===""? true:false,
            pan:fillAccount.pan ===""?true:false,
            employed:fillAccount.employed ===""? true:false,
            current:fillAccount.current ===""? true:false,
            loan:fillAccount.loan ===""? true:false,
            month:fillAccount.month ===""? true:false,
            previous:fillAccount.previous ===""? true:false,
            house:fillAccount.house ===""?true:false,
            rent:fillAccount.rent ===""? true:false,
            expense:fillAccount.expense ===""? true:false,
            emi:fillAccount.emi ===""? true:false,
            previoushike:fillAccount.previoushike ===""? true:false,
            estimate:fillAccount.estimate ===""? true:false,
            bank:fillAccount.bank ===""? true:false
            





        })
        setCurrentAmounnt({
            currentam:currentAmount.currentam,
        })
        setInterestRate({
            interest:interestRate.interest,
        })
        setNumMonth({
            nummon:numMonths.nummon,
        })
          setMonthlyPayment({
            monthlyPayment:setMonthlyPayment.monthlyPayment,
          })

      
     }

        // if (panCardValidation) {
        //     alert( "$ {panCard}is a valid PAN Number");
        // }
        // else {
        //     alert("Please Enter valid PAN Number");
        // }

       
    

    
    const fillHandling = (event) => {
      setFillAccount({...fillAccount,[event.target.id]:event.target.value});

  

    }




    




     
 
    return (
        <div>
            <h4>Fill A Number of Detail</h4>

            <div>
                <label className="label1">Full Name</label>
                <input type="text" className="fill" id="name" onChange={fillHandling}/>
               { fillError.name &&<p className="error">Please Enter your Name</p>}

            </div>
            <div>
                <label className="label1"> Address</label>
                <textarea className="fill" id="address" onChange={fillHandling} />
                {fillError.address &&<p className="error">Please Enter your Address</p>}
            </div>
            <div>
                <label className="label1">PAN Number</label>
                
                <input type="text" className="fill" id="pan" onChange={fillHandling}/>
               {fillError.pan && <p className="error">please Enter your PAN Number</p>}
            
            </div>
            <div>
                <label className="label1">Company where He His Employed</label>
                <input type="text" className="fill" id="employed" onChange={fillHandling}/>
                {fillError.employed&&<p className="error">Please Enter text</p>}
            </div>
            <div>
                <label className="label1">Current Salary</label>
                <input type="number"   className="fill" placeholder="Enter Salar" id="current" name="currentam" onChange={fillHandling} />
               {fillError.current&&<p className="error">Please Enter Salary</p>}
            </div>
            <div>
                <label className="label1">Previous Salary</label>
                <input type="number" className="fill" placeholder="Previous Salary" id="previous" onChange={fillHandling}/>
               { fillError.previous&&<p className="error">Please Enter Previous Salary</p>}
            </div>
            <div>
                <label className="label1"> Owns a house?</label>
                <input type="radio" name="house" className="fill1" id="house"  value="yes"  onChange={fillHandling}/>yes
                <input type="radio" name="house" value="No" onChange={fillHandling}/>No
               { fillError.house&&<p className="error">Please Enter yes or No</p>}
                
            </div>
            <div>
                <label className="label1">If rented ,what is the rent amount</label>
                <input type="number" className="fill"  id="rent" onChange={fillHandling}/>
               {fillError.rent&& <p className="error">Please Enter rent amount</p>}
            </div>
            <div>
                <label className="label1">Approximate grocery expense per month</label>
                <input type="number" className="fill" id="expense" onChange={fillHandling}/>
               {fillError.expense&& <p className="error">Please Enter </p>}
            </div>
            <div>
                <label className="label1">Current EMIs</label>
                <input type="text" className="fill" id="emi" onChange={fillHandling}/>
               {fillError.emi&& <p className="error">Please enter emi</p>}
            </div>
            <div>
                <label className="label1">existing number of loan </label>
                <input type="number" className="fill" id="loan" onChange={fillHandling}/>
                {fillError.loan&& <p className="error">please Enter</p>}
            </div>
            <div>
                <label className="label1"> Monthly Emi</label>
                <input type="number" className="fill" id="month" onChange={fillHandling}/>
                {fillError.month&&<p className="error">Please Entre</p>}
            </div>

            <div>
                <label className="label1">Date of Previous hike</label>
                <input type="date" className="fill" id="previoushike" onChange={fillHandling}/>
               {fillError.previoushike&& <p className="error">Please Enter your date</p>}
            </div>
            <div>
                <label className="label1">Estimated  date of next hike</label>
                <input type="date" className="fill" id="estimate" onChange={fillHandling}/>
               { fillError.estimate&&<p className="error">Please Enter your date</p>}
            </div>
            <div>
                <label className="label1">Name of his bank</label>
                <input type="text" className="fill" id="bank" onChange={fillHandling}/>
               {fillError.bank&& <p className="error">Please Enter bank name</p>}
            </div>

            <div>
                <button className="fill" onClick={()=>FillSubmit()} onChange={calculate}>SUBMIT</button>
            </div>



        </div>
    )
}

export default FillNumber;