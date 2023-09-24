 
// Challenge 1: Student Grade Generator (Toy Problem)

// Write a function that prompts the user to input student marks. 
// input should be between 0 and 100. The output should correspond 
//the correct grade, as shown below: 

//         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


function determineGrade() {
    //obtain marks from html
    const marksInput = document.getElementById("marksInput");
    const marks = parseFloat(marksInput.value);
    const resultElement = document.getElementById("results");
    //check if marks is a number before looping
    if (!isNaN(marks)) {
        if (marks > 79) {
            resultElement.textContent = 'Your Grade is an A!';
        } else if (marks >= 60 && marks <= 79) {
            resultElement.textContent = 'Your Grade is B.';
        } else if (marks >= 49 && marks < 60) {
            resultElement.textContent = 'Your Grade is C.';
        } else if (marks >= 40 && marks < 49) {
            resultElement.textContent = 'Your Grade is D.';
        } else {
            resultElement.textContent = 'Your Grade is E.';
        }
    } else {
        resultElement.textContent = 'Please enter valid marks.';
    }
}
//select html  button 
const btn = document.getElementById("btn");
//add the eventlister when the button is click to run our function
btn.addEventListener("click", determineGrade);
