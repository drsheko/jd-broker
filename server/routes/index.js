var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/api/email', async(req, res, next)  =>{
  var fullname = req.body.fullName;
  var company = req.body.company;
  var email = req.body.email;
  var message = req.body.message;
 
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

var mailToAdmin = {
  from: process.env.EMAIL,
  to: process.env.MAINEMAIL,
  subject: 'J&D Client',
  text: ` Sender : ${fullname}, 
          Company : ${company}, 
          Email-Address : ${email}, 
          Message : ${message}`
};

transporter.sendMail(mailToAdmin, function(error, info){
  if (error) {
     return res.status(500).json({success:false, error})
  } else {
   return res.status(200).json({success:true, info})
  }
});
});
module.exports = router;
