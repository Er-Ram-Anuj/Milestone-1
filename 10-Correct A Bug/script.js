let btn1 = document.getElementById("add");

btn1.addEventListener("click", myFun);
function myFun() {
  var selectInputFields = document
    .getElementById("productItoms")
    .getElementsByTagName("select");

  // Create an array to store the values
  var valuesArray = [];

  // Iterate through the input fields and push their values into the array
  for (var i = 0; i < selectInputFields.length; i++) {
    valuesArray.push(selectInputFields[i].value);
  }
  //document.write( valuesArray);
  ///now i am going to convert string in number

  let numericArray = valuesArray.map(Number);
  ///now i m going to add all numbers of array


let output= 0;

for (let i = 0; i < numericArray.length; i++) {
  output += numericArray[i];
}
//////////now i m going to display the wrong sum ////////////
document.getElementById("NoOfItoms").innerText=(output/2);
document.getElementById("alert").innerHTML="*This is wrong itom quantity*";

let btn2=document.getElementById("CorectBugBtn");
btn2.addEventListener("click", myfunction2);
function myfunction2(){
document.getElementById("correctQuanity").innerHTML="<h2>The corect quantity is-</h2><span id=correctNumber><span>";
document.getElementById("correctNumber").innerText=output;
}
}


