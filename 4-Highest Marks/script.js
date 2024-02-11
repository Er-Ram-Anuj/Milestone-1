///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

//This is concept of the program
//                ||
//                ||

// const studentsName=["Ram","Mohan","Lucky","Sangam","Ritik"];
// let Marks=[15,16,17,18,19];
// let highMark=Math.max(...Marks);
// let indexofmark=Marks.findIndex(enterd);
// function enterd(value){
//     return value==highMark;
// }
// console.log(indexofmark+1);
// console.log(studentsName[indexofmark]);

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

function maxMark(){
let stuName1=document.getElementById("student1").value;
let stuName2=document.getElementById("student2").value;
let stuName3=document.getElementById("student3").value;
let stuName4=document.getElementById("student4").value;
let stuName5=document.getElementById("student5").value;
let stuName6=document.getElementById("student6").value;
let stuName7=document.getElementById("student7").value;


let studentsName=[stuName1,stuName2,stuName3,stuName4,stuName5,stuName6,stuName7];


let stuMark1=document.getElementById("Mark_student1").value;
let stuMark2=document.getElementById("Mark_student2").value;
let stuMark3=document.getElementById("Mark_student3").value;
let stuMark4=document.getElementById("Mark_student4").value;
let stuMark5=document.getElementById("Mark_student5").value;
let stuMark6=document.getElementById("Mark_student6").value;
let stuMark7=document.getElementById("Mark_student7").value;

let studentsMarks=[stuMark1,stuMark2,stuMark3,stuMark4,stuMark5,stuMark6,stuMark7];

// logic............ 
let highMark=Math.max(...studentsMarks);
let indexofHighMark=studentsMarks.findIndex(enterd);
function enterd(value){
return value==highMark;
}
document.getElementById("Max-Mark1").innerText="The Maximum mark is-"
document.getElementById("Max-Mark").innerText=highMark ;
document.getElementById("stuname3").innerText="The Student Name is-" ;
document.getElementById("stuname").innerText=studentsName[indexofHighMark];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function minMark(){
    let stuName1=document.getElementById("student1").value;
    let stuName2=document.getElementById("student2").value;
    let stuName3=document.getElementById("student3").value;
    let stuName4=document.getElementById("student4").value;
    let stuName5=document.getElementById("student5").value;
    let stuName6=document.getElementById("student6").value;
    let stuName7=document.getElementById("student7").value;
    
    
    let studentsName=[stuName1,stuName2,stuName3,stuName4,stuName5,stuName6,stuName7];
    
    
    let stuMark1=document.getElementById("Mark_student1").value;
    let stuMark2=document.getElementById("Mark_student2").value;
    let stuMark3=document.getElementById("Mark_student3").value;
    let stuMark4=document.getElementById("Mark_student4").value;
    let stuMark5=document.getElementById("Mark_student5").value;
    let stuMark6=document.getElementById("Mark_student6").value;
    let stuMark7=document.getElementById("Mark_student7").value;
    
    let studentsMarks=[stuMark1,stuMark2,stuMark3,stuMark4,stuMark5,stuMark6,stuMark7];
    
    // logic............ 
    let minMark=Math.min(...studentsMarks);
    let indexofMinMark=studentsMarks.findIndex(enterd);
    function enterd(value){
    return value==minMark;
    }
    document.getElementById("min-Mark1").innerText="The minimum mark is-"
    document.getElementById("min-Mark").innerText=minMark ;
    document.getElementById("stuname4").innerText="The Student Name is-"
    document.getElementById("stuname2").innerText=studentsName[indexofMinMark];
    }
    
    