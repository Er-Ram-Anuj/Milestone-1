//////////////////////////////////////////////concept////////////////////////////////////////

// let numArr=[14,21,34,87,13,23,43,54,66,533,342,122,10,9,7,6,4,3];
// for(i=0;i<numArr.length;i++){
//     let result=numArr[i];
//     if(result % 2 ===0 ){
// continue;
//     }
//     if(result % 3 ===0 ){
// console.log(result)
//     }

// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

let arry = [];
function btnClick() {
  let a = document.getElementById("numInput").value;
  arry.push(a);
  document.getElementById("array").innerText = arry;
}
function check() {
  for (i = 0; i < arry.length; i++) {
    let result = arry[i];
    if (result % 2 === 0) {
      continue;
    }
    if (result % 3 === 0) {
      document.getElementById("result").innerText=result;
    }
  }
}
