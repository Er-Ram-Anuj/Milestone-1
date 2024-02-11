
const paragraph = document.getElementById('para');


const words = paragraph.textContent.split(' ');
let btn=document.getElementById("check");
btn.addEventListener("click",myFunction);
function myFunction(){


for (const word of words) {
   
    if (word.length > 8) {
       
        const span = document.createElement('span');
        span.textContent = word;
      
        span.style.backgroundColor = 'yellow';
        
        paragraph.innerHTML = paragraph.innerHTML.replace(word, span.outerHTML);
    }
}
}
//////////////////////////////////Another method//////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function() {
   
//     const paragraph = document.getElementById("paragraph");

   
//     const words = paragraph.textContent.split(" ");

    
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];

     
//         if (word.length > 8) {
         
//             const span = document.createElement("span");
//             span.textContent = word;
//             span.style.backgroundColor = "yellow";

   
//             words[i] = span.outerHTML;
//         }
//     }

//     paragraph.innerHTML = words.join(" ");
// });

