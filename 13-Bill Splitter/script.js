// Get references to elements
const okButton = document.getElementById("okButton");
const okButton2 = document.getElementById("okButton2");
const calculateButton = document.getElementById("calculateButton");

// Event listener for OK button click
okButton.addEventListener("click", handleOkButtonClick);
okButton2.addEventListener("click", numOfPerson);
function numOfPerson(){
    calculateButton.style.visibility="visible";

}


// Event listener for Calculate Total Cost button click
calculateButton.addEventListener("click", handleCalculateButtonClick);

// Function to handle OK button click
function handleOkButtonClick() {
    const numDishes = parseInt(document.getElementById("numDishes").value);
    createPriceInputs(numDishes);
}

// Function to handle Calculate Total Cost button click
function handleCalculateButtonClick() {
    const totalCost = calculateTotalCost();
    displayTotalCost(totalCost);
}

// Function to create input fields for dish prices
function createPriceInputs(numDishes) {
    const priceInputsDiv = document.getElementById("priceInputs");
    priceInputsDiv.innerHTML = "";

    for (let i = 0; i < numDishes; i++) {
        const input = createInputField(`Price of Dish ${i + 1}`);
        priceInputsDiv.appendChild(input);
    }
}

// Function to create input field
function createInputField(placeholder) {
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = placeholder;
    input.className = "dishPrice";
    return input;
}

// Function to calculate total cost
function calculateTotalCost() {
    const dishPrices = document.getElementsByClassName("dishPrice");
    let totalCost = 0;

    for (let i = 0; i < dishPrices.length; i++) {
        const price = parseFloat(dishPrices[i].value);
        if (!isNaN(price)) {
            totalCost += price;
        }
    }

    return totalCost;
}

// Function to display total cost
function displayTotalCost(cost) {
    const totalCostElement = document.getElementById("totalCost");
    totalCostElement.innerText = `Total Cost: ${cost.toFixed(2)}`;
    const numberOfPerPerson=parseInt(document.getElementById('numPerson').value);
    const costPerPerson=document.getElementById("costPerPerson");
    costPerPerson.innerText=((cost/numberOfPerPerson).toFixed(3));

}
