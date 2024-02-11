
const button=document.getElementById("submitBtn");
button.addEventListener("click",submit);
function submit(){
    const email=document.getElementById("emailbox").value;
const password=document.getElementById("password").value;
 if(email.indexOf("@")===(-1)||(password.length < 8)){
    document.getElementById("result").innerHTML="<h4>invalid email or password</h4>";
 }
 else{
   document.getElementById("result").innerHTML="<h5>valid email or password</h5>";
 }itted
}
