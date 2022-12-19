window.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById("calc-form");   //runs form
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() { //shows current UI Values
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

  function setupIntialValues() {

    const defaultValues = {
       amount: 50000,
        years: 12,
        rate: 3.0
     };
 
      const newAmount = document.getElementById("loan-amount");
 
      const newYears = document.getElementById("loan-years");
 
      const newRate = document.getElementById("loan-rate");

 
       newAmount.innerText = defaultValues.amount;
       newYears.innerText = defaultValues.years;
       newRate.innerText = defaultValues.rate;
       
 }
// Get the current values from the UI
// Update the monthly payment //**NOT COMPLETE
function update() {

 const currentUIValues= {
  
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  
 }

    const monthlyPayment = calculateMonthlyPayment(currentUIValues);

    updateMonthly(monthlyPayment);
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

   let p = values.amount;
   let i = (values.rate/100)/12;
   let n = (values.years * 12); 

   let monthlyPayment = ( (p * i) / (1 -((1+i) ** -n))).toFixed(2);
   
   return (monthlyPayment).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.**NOT COMPLETE

function updateMonthly(monthly) {

  const newMonth = document.getElementById("monthly-payment");

  newMonth.innerText = "$" + monthly;

}