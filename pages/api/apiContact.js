import { mailOptions, transporter } from "@/lib/nodemailer";
import toast from 'react-hot-toast';
import { Contact, Product } from "@/components";

const handler = async (req, res) => {
    if (req.method === "POST"){
        const data = req.body;

        const output = `
            <p>You have a new contact</p>
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.firstName}</li>
                <li>Last Name: ${req.body.lastName}</li>
                <li>Email: ${req.body.email}</li>
                <li>Subject: ${req.body.subject}</li>
                            
            </ul>
            <h3>Message</h3>
            ${req.body.message}
            `            

        if ( !data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
            return res.status(400).json({ message: 'Bad request' });
        }

        transporter.sendMail({...mailOptions,subject: data.subject,text:'Hello',html:output}, (error, info) => {
            if (error) {
                return console.log(error);
            }
            <Contact/>
            
        })

        
        /*await transporter.sendMail({
            ...mailOptions,                             
            subject: data.subject,
            text:'Hello',
            html:output
        });
        //res.render('hello')
        //toast.success('Message successfully sent')
        console.log('Hello')*/
    }
    
    return res.status(400).json({ message: 'Bad request' })
  }

export default handler;
