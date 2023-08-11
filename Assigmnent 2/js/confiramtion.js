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