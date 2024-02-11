function vowelCheck(){
    let enterdName=document.getElementById("studentName").value;
    document.getElementById("enterdName").innerText=enterdName;
    let numberOfVowel= enterdName.match(/[aeiou]/gi);
  numberOfVowel === null ? document.getElementById("vowelNumber").innerText="0" :  document.getElementById("vowelNumber").innerText=numberOfVowel.length;
  return false;
}