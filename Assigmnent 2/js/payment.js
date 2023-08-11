function validateName() {
    var name = document.getElementById("namecard").value;
    var nameError = document.getElementById("nameError");
    if (namecard === "") {
      nameError.textContent = "Please enter the name on the card.";
    } else {
      nameError.textContent = "";
    }
  }

  function validateCardNumber() {
    var cardNumber = document.getElementById("card-number1").value;
    var cardNumberError = document.getElementById("cardNumberError");
    if (cardNumber === "" || cardNumber.length !== 16) {
      cardNumberError.textContent = "Please enter a 16-digit card number.";
    } else {
      cardNumberError.textContent = "";
    }
  }

  function validateExpiry() {
    var expiry = document.getElementById("expiry2").value;
    var expiryError = document.getElementById("expiryError");
    var expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryPattern.test(expiry)) {
      expiryError.textContent = "Please enter a valid expiry date (MM/YY).";
    } else {
      expiryError.textContent = "";
    }
  }

  function validateCVV() {
    var cvv = document.getElementById("cvv3").value;
    var cvvError = document.getElementById("cvvError");
    if (cvv === "" || cvv.length !== 3) {
      cvvError.textContent = "Please enter a 3-digit CVV.";
    } else {
      cvvError.textContent = "";
    }
  }

  function validateForm() {
    // ... Rest of the validation function ...
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
document.getElementById("email1").innerText = summaryData.email;
document.getElementById("phone number").innerText = summaryData.phonenumber;
document.getElementById("gender2").innerText = summaryData.gender;


function redirecttopage2(){

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



  window.location.href = "confirmation.html";
}



