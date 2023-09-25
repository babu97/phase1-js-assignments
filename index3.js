// Write a program whose major task is to calculate an individual’s Net Salary 
// by getting the inputs of basic salary and benefits. 
// Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

//input basic pay and add the benifit to the total income 
//function to calculate payeee
// Function to calculate payee (Tax) deductions
function payeeCalculator(grossSalary) {
    if (grossSalary < 24000) {
        return grossSalary * 0.1;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        return grossSalary * 0.25;
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
        return grossSalary * 0.3;
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
        return grossSalary * 0.32;
    } else if (grossSalary > 800000) {
        return grossSalary * 0.35;
    } else {
        // You should specify a value for this case
        return 0;
    }
}

// Function to calculate NHIF deductions
function nhifCalculator(grossSalary) {
    if (grossSalary < 6000) {
        return 150;
    } else if (grossSalary < 8000) {
        return 300;
    } else if (grossSalary < 12000) {
        return 400;
    } else if (grossSalary < 15000) {
        return 500;
    } else if (grossSalary < 20000) {
        return 600;
    } else if (grossSalary < 25000) {
        return 750;
    } else if (grossSalary < 30000) {
        return 850;
    } else if (grossSalary < 35000) {
        return 900;
    } else if (grossSalary < 40000) {
        return 950;
    } else if (grossSalary < 45000) {
        return 1000;
    } else if (grossSalary < 50000) {
        return 1100;
    } else if (grossSalary < 60000) {
        return 1200;
    } else if (grossSalary < 70000) {
        return 1300;
    } else if (grossSalary < 80000) {
        return 1400;
    } else if (grossSalary < 90000) {
        return 1500;
    } else if (grossSalary < 100000) {
        return 1600;
    } else {
        return 1700;
    }
}

// Function to calculate NSSF deductions (6% of gross salary)
function nssfCalculator(grossSalary) {
    return grossSalary * 0.06;
}



document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const basicSalaryInput = document.getElementById("basicSalary");
    const benefitsInput = document.getElementById("benefits");
    const calculateButton = document.getElementById("calculateButton");
    const resultsDiv = document.getElementById("results");
    const grossSalaryResult = document.getElementById("grossSalaryResult");
    const payeeDeductionsResult = document.getElementById("payeeDeductionsResult");
    const nhifDeductionsResult = document.getElementById("nhifDeductionsResult");
    const nssfDeductionsResult = document.getElementById("nssfDeductionsResult");
    const netSalaryResult = document.getElementById("netSalaryResult");
  
    // Add click event listener to the Calculate button
    calculateButton.addEventListener("click", function () {
      // Parse input values
      const basicSalary = parseFloat(basicSalaryInput.value);
      const benefits = parseFloat(benefitsInput.value);
  
      // Calculate gross salary
      const grossSalary = basicSalary + benefits;
  
      // Calculate deductions using our functions
      const payeeDeductions = payeeCalculator(grossSalary);
      const nhifDeductions = nhifCalculator(grossSalary);
      const nssfDeductions = nssfCalculator(grossSalary);
  
      // Calculate net salary
      const netSalary = grossSalary - payeeDeductions - nhifDeductions - nssfDeductions;
  
      // Display results
      grossSalaryResult.textContent = `ksh${grossSalary.toFixed(2)}`;
      payeeDeductionsResult.textContent = `ksh${payeeDeductions.toFixed(2)}`;
      nhifDeductionsResult.textContent = `ksh${nhifDeductions.toFixed(2)}`;
      nssfDeductionsResult.textContent = `ksh${nssfDeductions.toFixed(2)}`;
      netSalaryResult.textContent = `ksh${netSalary.toFixed(2)}`;
  
      // Show the results div
      resultsDiv.style.display = "block";
    });
  
});
