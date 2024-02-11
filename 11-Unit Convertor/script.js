let btn = document.getElementById("btn");
btn.addEventListener("click", myFunction);
function myFunction() {
  let a = document.getElementById("Celsius").value;
  let b = document.getElementById("Fahrenheit").value;
  let result1=(b-32)*(5/9);
  let result2=(a*9/5)+32
 if(a==""||b==""){
   if(a=="" && b !==""){
    document.getElementById("Celsius").value=(result1);
   }
   if(a!==""&& b==""){
    document.getElementById("Fahrenheit").value=(result2);
   }
 }
 if(b!==""&&a!==""){
    document.getElementById("Celsius").value=(result1);
    document.getElementById("Fahrenheit").value=(result2);
 }
 if(a==""&&b==""){
    alert("Enter value to convert")
 }
}
