function fulldtails() {
    var name = document.getElementById("namefull").value;
    var nameError = document.getElementById("namefullError");
    if (name === "") {
      nameError.textContent = "Please fill out this filed";
    } else { 
      nameError.textContent = "";
    }
  }
  function emai() {
    var email = document.getElementById("email").value;
    var emailerror = document.getElementById("emailerror");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
      emailerror.textContent = "enter a  email";
    }
    if (!emailPattern.test(email)) {
      emailerror.textContent = "enter a valid email";
    } else {
      emailerror.textContent = "";
    }
     document.getElementById("email1").innerText = email;
  }
  function confirmemail(){

      var confirmEmail = document.getElementById("emailconfirm").value
      var emailConfirmError = document.getElementById("emailConfirmError");
      var email2 = document.getElementById("email").value
      if (confirmEmail === "") {
           emailConfirmError = "Confirm Email is required.";
         
      }  if (confirmEmail!==email2) {
          document.getElementById("emailConfirmError").textContent = "Emails do not match.";
         
      }
      else {
      emailConfirmError.textContent = "";
    }
  }

  function phonrnumber(){
      var phone = document.getElementById("phonenumber").value;
    var errorphone = document.getElementById("phoneNumberError");
    const phonepattern = /^\d{10}$/;

    if(phone === ""){
      errorphone.textContent = "enter a  email";
    }
  
    if (!phonepattern.test(phone)) {
      errorphone.textContent = "enter a valid phone number";
    } 
    else {
      errorphone.textContent = "";
    }
    document.getElementById("phone number").innerText= phone;

  }
  function validatePassword() {
      var password = document.getElementById("password").value;
      var passwordError = document.getElementById("passwordError");
     
      if (password.length < 8) {
          passwordError.textContent = "Password must be at least 8 characters long.";
      } else {
          passwordError.textContent = "";
      }
  }
  function male4(){
     
    let male1 = "Male"
    
    document.getElementById("gender2").innerText = "male";
  }
  function female4(){
     
    let male1 = "female"
    
    document.getElementById("gender2").innerText = "female";
  }
  function other4(){
     
    let male1 = "other"
    
    document.getElementById("gender2").innerText = "other";
  }


  


  const summaryData = JSON.parse(localStorage.getItem("summaryData"));

  document.getElementById("date").innerText = summaryData.date;
  document.getElementById("tableTime").innerText = summaryData.time;
  document.getElementById("slA").innerText = summaryData.slAdults;
  document.getElementById("slC").innerText = summaryData.slChild;
  document.getElementById("fA").innerText = summaryData.fAdults;
  document.getElementById("fC").innerText = summaryData.fChild;
  document.getElementById("iN").innerText = summaryData.infant;
  document.getElementById("total").innerText = summaryData.totalPayables;


function redirecttopage1(){

  const date = document.getElementById("date").innerText;
  const time = document.getElementById("tableTime").innerText;
  const slAdults = document.getElementById("slA").innerText;
  const slChild = document.getElementById("slC").innerText;
  const fAdults = document.getElementById("fA").innerText;
  const fChild = document.getElementById("fC").innerText;
  const infant = document.getElementById("iN").innerText;
  const totalPayables = document.getElementById("total").innerText;
  const gender = document.getElementById("gender2").innerText;
  const email = document.getElementById("email1").innerText;
  const phonenumber = document.getElementById("phone number").innerText;


  localStorage.setItem("summaryData", JSON.stringify({
    date,
    time,
    slAdults,
    slChild,
    fAdults,
    fChild,
    infant,
    totalPayables,
    gender,
    email,
    phonenumber,
  }));



  window.location.href = "payment.html";
}

 




  