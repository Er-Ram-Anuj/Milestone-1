
function calculate(){
  let numberOfDays=document.getElementById('number').value;
  let daysOfRent=parseInt(numberOfDays);
  console.log(daysOfRent);
  let output=document.getElementById('rent');
  let carsType=document.getElementById('cars').value;
  if(carsType==="Economy"){
    output.innerText=(daysOfRent*4000);
  }
  else if(carsType==="Midsize") {
    output.innerText=(daysOfRent*10000); 
  } 
  else {
    output.innerText=(daysOfRent*20000);   
  } 
}