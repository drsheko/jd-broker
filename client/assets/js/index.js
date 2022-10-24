var submitBtn = document.querySelector("#form-submit");
var form =document.querySelector('.myForm')
var modal =document.querySelector('.modal')
const submitForm = async (e) => {
    e.preventDefault()
  e.stopImmediatePropagation();
  var fullName = document.querySelector("#form-name");
  var email = document.getElementById("email");
  var company = document.querySelector("#company");
  var message = document.querySelector("#message");
  $('#exampleModalCentered').modal('show')
  try {
    var url = "https://jd-broker-admin.onrender.com/";
    var res = await fetch(`${url}api/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        fullName: fullName.value,
        email: email.value,
        company: company.value,
        message: message.value,
      }),
    });
    var data = await res.json()
    
   
  } catch (error) {
   
  }
 
  fullName.value = "";
  email.value = "";
  company.value = "";
  message.value = "";
};

form.addEventListener('submit', submitForm);
