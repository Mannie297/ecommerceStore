
import React from 'react'

//import { Contact } from '@/components'

/*
const contact = () => {
  return (
    <div>
        <Contact/>
    </div>
  )
}

export default contact
*/



import { useStateContext } from '@/context/StateContext';


const Contact = () => {

    const { onSubmitt, handleChange, values} = useStateContext();

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
                
                <form method='POST' action='success'>
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

export default Contact

