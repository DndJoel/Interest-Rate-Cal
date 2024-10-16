//The function comput makes the function that will run all of the calculations and variables
function compute() {
    var principal = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    
    //The boolean checks if the principal amount is a positive number, if not, it alerts the user to place a positive amount
    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("amount").focus();
        
        //Else If all inputs are valid, it displays the result
    } else {
        result.innerHTML = `If you deposit $<mark>${principal}</mark>,<br> 
                            at an interest rate of <mark>${rate}%</mark>,<br> 
                            You will receive an amount of $<mark>${amount}</mark>,<br> 
                            in the year <mark>${year}</mark><br>`;
    } 
}

//The function updateRate updates the interest rate slider value dynamically
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
