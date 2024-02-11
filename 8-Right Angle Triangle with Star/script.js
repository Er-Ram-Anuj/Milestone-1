document.write("this is type-1 <br>")
for(let i=1;i<=6;i++){
for(let k=1;k<=i;k++){
document.write("*")
}
document.write("<br>")
}

document.write("this is type-2 <br>")
for(let p=1;p<=6;p++){
    for (let k=1;k<=6-p;k++){
        document.write("&nbsp;&nbsp")  
    }
    for(let q=1;q<=p;q++){
        document.write("*")
        }
        document.write("<br>") 
}

document.write("this is type-3 <br>")

for(let p=6;p>=1;p--){
    for(let q=1;q<=p;q++){
        document.write("*")
    }
    for (let k=1;k<=6-p;k++){
        document.write("&nbsp;&nbsp")  
    }
    document.write("<br>") 
}
