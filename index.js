

let displayScreen = document.getElementById("displayScreen");

function appendToDisplayScreen(input){
    displayScreen.value += input;
}

function calculateTotal(){
    try{
        displayScreen.value = eval(displayScreen.value);
    }
    catch(error){
        displayScreen.value = "Calculation Error";
    }
}

function clearDisplayScreen(){
    displayScreen.value = "";
}