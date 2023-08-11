   // Get the current date
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  let selectedDate = null;


  // Function to generate the calendar
  function generateCalendar(month, year) {
    const monthDiv = document.getElementById("month");
    const daysDiv = document.getElementById("days");
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Clear previous calendar
    monthDiv.innerHTML = "";
    daysDiv.innerHTML = "";

    // Display month and year
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthDiv.innerText = months[month] + " " + year;

    // Fill in the days of the previous month
    for (let i = 0; i < firstDay; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("day");
      daysDiv.appendChild(dayDiv);
    }

    // Fill in the days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("day");
      dayDiv.innerText = i;
      dayDiv.addEventListener("click", () => selectDate(dayDiv));
      daysDiv.appendChild(dayDiv);
    }
  }

  // Function to handle date selection
  function selectDate(dayDiv) {
    const allDays = document.querySelectorAll(".day");
  allDays.forEach(day => day.classList.remove("selected"));

  // Add the 'selected' class to the clicked day
  dayDiv.classList.add("selected");

  // Store the selected date
  selectedDate = new Date(currentYear, currentMonth, parseInt(dayDiv.innerText));
  document.getElementById("date").innerText = selectedDate;
  }

  // Generate the initial calendar
  generateCalendar(currentMonth, currentYear);
  // ... (existing code)

  // Function to navigate to the previous month
  function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
  }

  // Function to navigate to the next month
  function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
  }

  // Add event listeners to the navigation buttons
  document.getElementById("prevMonth").addEventListener("click", prevMonth);
  document.getElementById("nextMonth").addEventListener("click", nextMonth);

  // ... (existing code)

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  let count8 = 0;
  let count9 = 0;
  let coun10 = 0;
  total =0;
  


  function getAdditon(num) {


    switch (num) {
      case 1:
        let count1 = document.getElementById("Showcount1").value;
        ++count1;
        document.getElementById("Showcount1").value = count1;

        let charge = count1 * 4;
        
        

        document.getElementById("slA").innerText = `$${charge}`;
        

        


        break;
      case 2:
        let count2 = document.getElementById("Showcount2").value;
        ++count2;
        document.getElementById("Showcount2").value = count2;
        

        let charge1 = count2 * 2;
        
        

        document.getElementById("slC").innerText = `$${charge1}`;
        
        
        break;
      case 3:
        let count3 = document.getElementById("Showcount3").value;
        ++count3;
        document.getElementById("Showcount3").value = count3;
        let charge2 = count3 * 10;
        
        
        document.getElementById("fA").innerText = `$${charge2}`;
        
        
        break;
      case 4:
        let count4 = document.getElementById("Showcount4").value;
        ++count4;
        document.getElementById("Showcount4").value = count4;
        let charge3 = count4 * 5;
        
        document.getElementById("fC").innerText = `$${charge3}`;
        

        break;
      case 5:
        let count5 = document.getElementById("Showcount5").value;
        ++count5;
        document.getElementById("Showcount5").value = count5;

        let charge4 = "free"

        document.getElementById("iN").innerText = `$${charge4}`;


        break; 
    }

  
    let x =document.getElementById("Showcount1").value;
    let y = document.getElementById("Showcount2").value;
    let r = document.getElementById("Showcount3").value;
    let k = document.getElementById("Showcount4").value;
    total = (x*4)+(y*2)+(r*10)+(k*5);
    document.getElementById("total").innerText = `$${total}`;




  }
  function getsub(num) {
    switch (num) {
      case 6:
        let count6 = document.getElementById("Showcount1").value;
        --count6;
        document.getElementById("Showcount1").value = count6;
        let charge5 = count6 * 4;
       document.getElementById("slA").innerText = `$${charge5}`;
       
        break;
      case 7:
        let count7 = document.getElementById("Showcount2").value;
        --count7;
        document.getElementById("Showcount2").value = count7;

        let charge6 = count7 * 2;

        document.getElementById("slC").innerText = `$${charge6}`;
        break;
      case 8:
        let count8 = document.getElementById("Showcount3").value;
        --count8;
        document.getElementById("Showcount3").value = count8;
        let charge7 = count8 * 10;

        document.getElementById("fA").innerText = `$${charge7}`;

        break;
      case 9:
        let count9 = document.getElementById("Showcount4").value;
        --count9;
        document.getElementById("Showcount4").value = count9;
        let charge8 = count9 * 5;

        document.getElementById("fC").innerText = `$${charge8}`;
        break;
      case 10:
        let count10 = document.getElementById("Showcount5").value;
        --count10;

        document.getElementById("Showcount5").value = count10;

        let charge9 = "free"

        document.getElementById("iN").innerText = `$${charge9}`;

        break;

    }

    let x =document.getElementById("Showcount1").value;
    let y = document.getElementById("Showcount2").value;
    let r = document.getElementById("Showcount3").value;
    let k = document.getElementById("Showcount4").value;
    total = (x*4)+(y*2)+(r*10)+(k*5);
    document.getElementById("total").innerText = `$${total}`;

  }

  
  function time1() {
    document.getElementById("tableTime").innerText = "7.00 am to 8.00 am";
  }

  function time2() {
    document.getElementById("tableTime").innerText = "8.00 am to 9.00 am";
  }
 

  function time3() {
    document.getElementById("tableTime").innerText = "9.00 am to 10.00 am";
  }
 
  function time4() {
    document.getElementById("tableTime").innerText = "10.00 am to 11.00 am (Peak)";
  }

  function time5() {
    document.getElementById("tableTime").innerText = "11.00 am to 12.00 pm (Peak)";
  }
  

  function time6() {
    document.getElementById("tableTime").innerText = "12.00 pm to 01.00 pm (Peak)";
  }
 
  function time7() {
    document.getElementById("tableTime").innerText = "01.00 pm to 02.00 pm";
  }

  function time8() {
    document.getElementById("tableTime").innerText = "2.00 pm to 3.00 pm";
  }
  

  function time9() {
    document.getElementById("tableTime").innerText = "3.00 pm to 4.00 pm (Peak)";
  }
  function time10() {
    document.getElementById("tableTime").innerText = "4.00 pm to 05.00 pm (Peak)";
  }
  function time11() {
    document.getElementById("tableTime").innerText = "05.00 pm to 06.00 pm (Peak)";
  }
  function time22(){
    document.getElementById("tableTime").innerText = "07.00 pm to 09.00 pm 2hrs";

    let x =document.getElementById("Showcount1").value;
    let y = document.getElementById("Showcount2").value;
    let r = document.getElementById("Showcount3").value;
    let k = document.getElementById("Showcount4").value;
    total = (x*4)+(y*2)+(r*10)+(k*5);
    document.getElementById("total").innerText = `$${total*2 + " " + "(2hr charge)"}`;
    
  } 
  function time223(){
    document.getElementById("tableTime").innerText = "07.00 pm to 10.00 pm 3hrs";

    let x =document.getElementById("Showcount1").value;
    let y = document.getElementById("Showcount2").value;
    let r = document.getElementById("Showcount3").value;
    let k = document.getElementById("Showcount4").value;
    total = (x*4)+(y*2)+(r*10)+(k*5);
    document.getElementById("total").innerText = `$${total*3 + " " + "(3hr charge)"}`;
    
  } 
  function time67(){
    document.getElementById("tableTime").innerText = "10.00 am to 12.00 pm 2hrs";
    let count1 = document.getElementById('Showcount1').value;
    let charge1 = count1*6;
    document.getElementById("slA").innerText = `$${charge1}`; 
    let count2 = document.getElementById('Showcount2').value;
    let charge2 = count2*3;
    document.getElementById("slC").innerText = `$${charge2}`;  
    let count3 = document.getElementById('Showcount3').value;
    let charge3 = count3*13;
    document.getElementById("fA").innerText = `$${charge3}`; 
    let count4 = document.getElementById('Showcount4').value;
    let charge4 = count4*8;
    document.getElementById("fC").innerText = `$${charge4}`; 

    let totalpeak = charge1+charge2+charge3+charge4;
    document.getElementById("total").innerText = `$${totalpeak*2 + " " + "(2hr charge)"}`;




  }
  function time671(){
    document.getElementById("tableTime").innerText = "10.00 am to 01.00 pm 3hrs";
    let count1 = document.getElementById('Showcount1').value;
    let charge1 = count1*6;
    document.getElementById("slA").innerText = `$${charge1}`; 
    let count2 = document.getElementById('Showcount2').value;
    let charge2 = count2*3;
    document.getElementById("slC").innerText = `$${charge2}`;  
    let count3 = document.getElementById('Showcount3').value;
    let charge3 = count3*13;
    document.getElementById("fA").innerText = `$${charge3}`; 
    let count4 = document.getElementById('Showcount4').value;
    let charge4 = count4*8;
    document.getElementById("fC").innerText = `$${charge4}`; 

    let totalpeak = charge1+charge2+charge3+charge4;
    document.getElementById("total").innerText = `$${totalpeak*3 + " " + "(3hr charge)"}`;

    


  } 

  function time81(){

    document.getElementById("tableTime").innerText = "01.00 pm to 03.00 pm 2hrs";

    let x =document.getElementById("Showcount1").value;
    let y = document.getElementById("Showcount2").value;
    let r = document.getElementById("Showcount3").value;
    let k = document.getElementById("Showcount4").value;
    total = (x*4)+(y*2)+(r*10)+(k*5);
    document.getElementById("total").innerText = `$${total*2 + " " + "(2hr charge)"}`;

  }

  function time100(){
    document.getElementById("tableTime").innerText = "03.00pm to 05.00 pm 2hrs (peak)";
    let count1 = document.getElementById('Showcount1').value;
    let charge1 = count1*6;
    document.getElementById("slA").innerText = `$${charge1}`; 
    let count2 = document.getElementById('Showcount2').value;
    let charge2 = count2*3;
    document.getElementById("slC").innerText = `$${charge2}`;  
    let count3 = document.getElementById('Showcount3').value;
    let charge3 = count3*13;
    document.getElementById("fA").innerText = `$${charge3}`; 
    let count4 = document.getElementById('Showcount4').value;
    let charge4 = count4*8;
    document.getElementById("fC").innerText = `$${charge4}`; 

    let totalpeak = charge1+charge2+charge3+charge4;
    document.getElementById("total").innerText = `$${totalpeak*2 + " " + "(2hr charge)"}`;



  }
  function time1000(){
    document.getElementById("tableTime").innerText = "04.00pm to 06.00 pm 2hrs (peak)";
    let count1 = document.getElementById('Showcount1').value;
    let charge1 = count1*6;
    document.getElementById("slA").innerText = `$${charge1}`; 
    let count2 = document.getElementById('Showcount2').value;
    let charge2 = count2*3;
    document.getElementById("slC").innerText = `$${charge2}`;  
    let count3 = document.getElementById('Showcount3').value;
    let charge3 = count3*13;
    document.getElementById("fA").innerText = `$${charge3}`; 
    let count4 = document.getElementById('Showcount4').value;
    let charge4 = count4*8;
    document.getElementById("fC").innerText = `$${charge4}`; 

    let totalpeak = charge1+charge2+charge3+charge4;
    document.getElementById("total").innerText = `$${totalpeak*2 + " " + "(2hr charge)"}`;


  }
 


  function peak() {

    let count1 = document.getElementById('Showcount1').value;
    let charge1 = count1*6;
    document.getElementById("slA").innerText = `$${charge1}`; 
    let count2 = document.getElementById('Showcount2').value;
    let charge2 = count2*3;
    document.getElementById("slC").innerText = `$${charge2}`;  
    let count3 = document.getElementById('Showcount3').value;
    let charge3 = count3*13;
    document.getElementById("fA").innerText = `$${charge3}`; 
    let count4 = document.getElementById('Showcount4').value;
    let charge4 = count4*8;
    document.getElementById("fC").innerText = `$${charge4}`; 

    let totalpeak = charge1+charge2+charge3+charge4;
    document.getElementById("total").innerText = `$${totalpeak}`;


    
    
    



 
  }
  function redirecttopage(){

    

    const date = document.getElementById("date").innerText;
    const time = document.getElementById("tableTime").innerText;
    const slAdults = document.getElementById("slA").innerText;
    const slChild = document.getElementById("slC").innerText;
    const fAdults = document.getElementById("fA").innerText;
    const fChild = document.getElementById("fC").innerText;
    const infant = document.getElementById("iN").innerText;
    const totalPayables = document.getElementById("total").innerText;
    



    localStorage.setItem("summaryData", JSON.stringify({
      date,
      time,
      slAdults,
      slChild,
      fAdults,
      fChild,
      infant,
      totalPayables,
     
    }));










    window.location.href = "details.html";  

    

  }
  