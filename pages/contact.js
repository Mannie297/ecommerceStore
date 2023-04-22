import { sendContactForm } from '@/lib/sendContact';
import React, { useState } from 'react'
//import { useState } from 'react';
import { toast } from 'react-hot-toast';

const iniValues = {firstName:"",lastName:"",email:"",subject:"",message:"",}
const iniState = { values: iniValues};


const contact = () => {
    
    const [state, setState] = useState(iniState);
    const {values, error} = state;

    const handleChange = ({target}) => setState((prev) =>({
        ...prev,
        values:{
            ...prev.values,
            [target.name]: target.value,
        },
    }));

    const onSubmitt = async () => {
        
        setState((prev) => ({
            ...prev,
        }));
        try {
            await sendContactForm(values);
            
            setState(iniState);
                        
        } catch (error) {
            setState((prev) => ({
                ...prev,
            error: error.message,
            }));            
        }

        //toast.success(`message sent`);
        
    };

  return (

    <section>
        <div className="contacty">
            <h1>Contact Us</h1>
       </div>
        <div className="contacty">
            <p>For Payments, Orders and Inquiries, please use this contact form and we will get back to you shortly.</p>
        </div>

        <div className="contacty">
            <div className="contacty-form">
                
                <form method='POST' action='contact'>
                    <div className="row">
                        <div className="input50">
                            <input type="text" placeholder='First Name' name='firstName' required value={values.firstName} onChange={handleChange}/>
                        </div>
                        <div className="input50">
                            <input type="text" placeholder="Last Name" name='lastName' required value={values.lastName} onChange={handleChange}/>
                        </div>                        
                    </div>

                    <div className="row">
                        <div className="input50">
                            <input type="text" placeholder="Email" name='email' required value={values.email} onChange={handleChange}/>
                        </div>
                        <div className="input50">
                            <input type="text" placeholder="Subject" name='subject' required value={values.subject} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input100">
                            <textarea placeholder="Message" name='message' value={values.message} onChange={handleChange}/>
                        </div>
                    </div>

                    <div align='center'>
                        
                        <button type='submit' className="cntbut" disabled={!values.firstName ||!values.lastName||!values.email || !values.subject } onClick={onSubmitt}>Submit</button>
                    </div>                
                    
                </form>
            </div>
        </div>
          
    </section>

    
  );
};

export default contact