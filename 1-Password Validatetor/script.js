function mainfunction() {
  let a = document.getElementById("inp1").value;
  let b = document.getElementById("inp2").value;
  if (a == "") {
    document.getElementById("mes").innerHTML = "Enter the Password";
    document.getElementById("inp1").style.borderBlockColor="red";
    // return false;
  }
  if (b == "") {
    document.getElementById("mess").innerHTML = "Enter the Password";
    document.getElementById("inp2").style.borderColor="red";
    return false;
  }
  if (a.length < 5) {
    document.getElementById("mes").innerHTML = "Password lenght min-5 char";
    return false;
  }

  if (a.length > 20) {
    document.getElementById("mes").innerHTML = "Password lenght max-20 char";
    return false;
  }


  if (b.length < 5) {
    document.getElementById("mes").innerHTML = "Password lenght min-5 char";
    return false;
  }

  if (b.length > 20) {
    document.getElementById("mes").innerHTML = "Password lenght max-20 char";
    return false;
  }



  if(a!=b){
    document.getElementById("messs").innerHTML = "password not matched";
    return false;
  }
  else{
    alert("Form Submitted");
  }
}
