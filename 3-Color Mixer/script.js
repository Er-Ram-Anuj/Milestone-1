const btn = document.getElementById("mixColor");
function mixedcolor() {
  let a = document.getElementById("colorFirst").value;
  let b = document.getElementById("colorSecond").value;
  switch (a) {
    case (a = "red"):
      switch (b) {
        case (b = "blue"):
          document.getElementById("resultColor").innerText = "Purple";
          document.getElementById("resultColor").style.backgroundColor =
            "purple";
          break;
        case (b = "yellow"):
          document.getElementById("resultColor").innerText = "Orange";
          document.getElementById("resultColor").style.backgroundColor =
            "orange";
          break;
          default:
            document.getElementById("ErrorMessage").innerText =
              "invalid color combination";
              break;
      }
      break;
    
    case (a = "blue"):
      switch (b) {
        case (b = "red"):
          document.getElementById("resultColor").innerText = "Purple";
          document.getElementById("resultColor").style.backgroundColor =
            "purple";
          break;
        case (b = "yellow"):
          document.getElementById("resultColor").innerText = "Orange";
          document.getElementById("resultColor").style.backgroundColor =
            "orange";
          break;
          default:
            document.getElementById("ErrorMessage").innerText =
              "invalid color combination";
             break;
      }
      break;


    case (a = "yellow"):
      switch (b) {
        case (b = "red"):
          document.getElementById("resultColor").innerText = "Orange";
          document.getElementById("resultColor").style.backgroundColor =
            "orange";
          break;
        case (b = "blue"):
          document.getElementById("resultColor").innerText = "Green";
          document.getElementById("resultColor").style.backgroundColor =
            "green";
          break;
          default:
            document.getElementById("ErrorMessage").innerText =
              "invalid color combination";
      }
      break;
  }
}
btn.addEventListener("click", mixedcolor);
