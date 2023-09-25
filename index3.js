// Write a program whose major task is to calculate an individual’s Net Salary 
// by getting the inputs of basic salary and benefits. 
// Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

//input basic pay and add the benifit to the total income 

const basicSalary = parseFloat(prompt('Enter Basic Salary'))
const benefits = parseFloat(prompt('Enter benefits:'))

let grossSalary = basicSalary +benefits;

function payeeCalculator(grossSalary){

    if (grossSalary <24000){
        return grossSalary*0.1;
    }
    else if (grossSalary>24000 && grossSalary <=32333){
        return grossSalary*0.25; 
    }
    else if(grossSalary>32333 && grossSalary <=500000){
        return grossSalary *0.3;
    }else if(grossSalary>500000 && grossSalary <=800000){
       return grossSalary *0.32;

    }else if(grossSalary > 800000){

        return grossSalary *0.35;
    }
    else{
        return grossSalary *0.35
    }


}

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

function nssfCalculator(grossSalary){

return grossSalary *0.05;
}

//calculate deductions 
let payeeDeductions = payeeCalculator(grossSalary);
let nhifDeductions = nhifCalculator(grossSalary);
let nssfDeductions = nssfCalculator(grossSalary);


//calculate net salary 
const netPay  = grossSalary -payeeDeductions-nhifDeductions-nssfDeductions


//display the results
console.log(`Gross Salary: $${grossSalary.toFixed(2)}`);
console.log(`Payee (Tax) Deductions: $${payeeDeductions.toFixed(2)}`);
console.log(`NHIF Deductions: $${nhifDeductions.toFixed(2)}`);
console.log(`NSSF Deductions: $${nssfDeductions.toFixed(2)}`);
console.log(`Net Salary: $${netSalary.toFixed(2)}`);

// Close the readline interface
rl.close();
