function capitalize(){
   let string=document.getElementById("user").value; 
   document.getElementById("message").innerText=string;
   //to remove extra spaces///////////////
   let string1=string.split(' ').join('');
  ////////////////////////////////////////
 let string2=string1.charAt(0).toUpperCase() + string1.slice(1);

//////////use of ternory operator///////////////////////
let result=(string1==string2)? "true" : "false" ;
/////////////condition////////////////////////////////
if(result=="true"){
   document.getElementById("result").innerText=string1;
}
else{
   document.getElementById("result").innerText=string2;
}
return false;
}
