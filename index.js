const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())

const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "smenaga502@gmail.com",
    pass: "eabk ascl bttw wcig",
  },
});

transporter.sendMail(
    {
        from:"smenaga5022gmail.com",
        to:"gsundari179@gmail.com",
        subject:"A message from Bulk Mail App",
        text:"Hi, How are you ?"
    },
    function(error,info){
        if(error)
        {
            console.log(error)
        }
        else{
            console.log(info);
        }
    }
    )


app.listen(5000,function(){
    console.log("Server started.....")
})