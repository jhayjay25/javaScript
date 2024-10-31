//DISPLAY NAME
function displayName(name) {
    document.write(name);
  }
  //BUTTON ALERT
  function buttonAlert() {
    alert("You clicked the button!");
  }
  function changeColor() {
    document.getElementById("color").style.color = "red";
  }
  function productOfTwoNumbers(firstNumber, secondNumber, outputDisplay) {
    var product = firstNumber * secondNumber;
    document.getElementById(outputDisplay).innerHTML = product;
  }
  let isRed = true

  function changeBackground() {
    if (isRed) {
        document.getElementById("background").style.backgroundColor = "blue";
    } else {
        document.getElementById("background").style.backgroundColor = "red";
    }
    isRed = !isRed;
   }
   function changeText() {
     document.getElementById("text").innerHTML = "Goodbye!";
   } 

  //function changeImage() {}

  function computeGrade() {
    let name = prompt("enter your name");
    var totalItem = parseInt(prompt("Enter Your Total Item: "));
    var totalScore = parseInt(prompt("Enter Your Total Score: "));
   var grade = formula(totalItem, totalScore).toFixed(2);
    alert("your Name is: "+ name +"\nYour Grade: " + grade + "\nResult: " + checkResult(grade));
    console.log("your Name is: "+ name+ "\nYour Grade: " + grade + "\nResult: " + checkResult(grade)); 

   document.getElementById("outpu").innerHTML = "your Name is: "+ name+ "<br>Your Grade: " + grade + "<br>Result: " + checkResult(grade); 
  
}

function checkResult(grade) {
    if (grade <= 1.0) {
    return "Excellent";
  } else if (grade <= 3.0) {
      return "Good";
  } else if (grade <= 3.5) {
      return "Fair";
  } else if (grade <= 4.5) {
      return "Needs Improvement";
  } else {
      return "Failing";
}
}

function formula(totalItem, totalScore){
    return -4* (totalScore/totalItem) + 5;
}

//NEXT PART OF THE ASSIGNMENT
function displayName(name = null){
  return name;
}

function computeTwoNumber(num1, num2){
  return num1 + num2;
}

function confirmSubmision(){
  if (confirm("do you realy want to submit?")){
      alert(computeTwoNumber(12,3));
  }
}
let name = "jhay";
var age = 21;
const remarks = "student"; 

document.getElementById("result").innerHTML = name + " " + age + " " + remarks;
document.getElementsByClassName("output")[0].innerHTML = name + " " + age + " " + remarks;
document.getElementById("outputName").innerHTML = name + " " + age + " " + remarks;
document.write("<br>");
document.write(displayName("Jhay"));

console.log(computeTwoNumber(12,3));
//document.write(computeTwoNumber(12,3))

document.getElementById("compute").innerHTML= computeTwoNumber(12,3);

if (age >= 18) {
    document.write("<br>Adult"); 
} else {
    document.write("<br>Teen");
}
document.write("<br>")
//example docment.write("HELLO WORLD"); and co
document.write("HELLO WORLD");
console.log('Hello World');

let names = "John Alfred Laylay" 
displayName(names);
//COMPUTE 2 NUMBERS
let firstNumber = 112;
let secondNumber = 55;
productOfTwoNumbers(firstNumber, secondNumber, "sampleComputation");
productOfTwoNumbers(firstNumber, secondNumber, "secondComputation");


