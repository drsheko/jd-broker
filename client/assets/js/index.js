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
 
  try {$('#modal-spinner').modal('show')
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
    $('#modal-spinner').modal('hide')
    $('#exampleModalCentered').modal('show')
    var data = await res.json()
    console.log(data);
   
  } catch (error) {
   
  }
 
  fullName.value = "";
  email.value = "";
  company.value = "";
  message.value = "";
};

form.addEventListener('submit', submitForm);
