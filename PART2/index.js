const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'boranbay.meruert05@gmail.com',
        pass: 'cexb oimp slev ipnf'
    }
})


const sendMail = async ()=>{
    try{
        const mainInfo = {
            from: 'boranbay.meruert05@gmail.com',
            to: 'meruyertbauyrzhanqyzy@gmail.com',
            subject: 'SUBJECT3',
            text: 'TEXT3'
        }

        const info = await transporter.sendMail(mainInfo);
        console.log('Email sent: ' + info.response);
    }
    catch(err){
        if (err.code === 'EAUTH'){
            console.log('Error: ' + err.code + ' - ' + 'Invalid Login Data')
        } else if (err.code === 'ECONNECTION'){
            console.log('Error: ' + err.code + ' - ' + 'No Internet Connection')
        } else{
            console.log('Error: ' + err.code + ' - ' + 'Unknown Error')
        }
    }
}

sendMail();
