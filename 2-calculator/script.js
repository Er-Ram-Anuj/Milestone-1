

function cal(){
    let var1=document.getElementById("num1").value;
    let var2=document.getElementById("num2").value;
    let ope=document.getElementById("oper").value;
    //string ko number me badalne ka trika .
    //type-1...........+var1  laga do ya aage number number(var1)   likh do
    switch(ope){
        case "":
document.getElementById("resultDisplay").innerText="**please enter operator**";
console.log("Invalid Operator");
        break;
            case "-":
               var result=(+var1)-(+var2);
                document.getElementById("resultDisplay").innerText=(result);
                break;
                case "+":
               var result=(+var1)+(+var2);
                document.getElementById("resultDisplay").innerText=(result);
                break;
                case "*":
               var result=(+var1)*(+var2);
                document.getElementById("resultDisplay").innerText=(result);
                break;
                case "/":
               var result=(+var1)/(+var2);
                document.getElementById("resultDisplay").innerText=(result);
                break;
             default:
                document.getElementById("resultDisplay").innerText="Invalid Operator"
}
}