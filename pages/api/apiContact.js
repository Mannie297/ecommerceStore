import { mailOptions, transporter } from "@/lib/nodemailer";


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

        try {
            await transporter.sendMail({
                ...mailOptions,                             
                subject: data.subject,
                text:'Hello',
                html:output
            });
            
            return res.status(200).json({success: true })
            
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });
        }
        

    }
    
    return res.status(400).json({ message: 'Bad request' })
  }



export default handler;
