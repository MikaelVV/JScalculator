

let displayScreen = document.getElementById("displayScreen");

function appendToDisplayScreen(){
    displayScreen.value += displayScreen.Input;
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