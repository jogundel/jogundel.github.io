window.onload = function(){
    var date = new Date();
    document.getElementById('date').innerHTML = "This date is: " + date;

}
function getGreeting(){
    var name = document.getElementById('name').value;
    var feeling = document.getElementById('feeling').value;
    var text = "The AMB welcomes you " + name + "!" + " We're glad you are doing "
    + feeling + "!";
    document.getElementById('getGreeting').innerHTML = text;

}
function getNumber(){
    var numbertext = document.getElementById('number').value;
    var number = Number(numbertext);
    var polygon;
    if(number >= 0) {
        if (number !== Math.floor(number)) {
            //Has a dec place
             number = Math.round(number);
         }  
       polygon = determineShape(number);  
    }
    else {
        number =  number * -1;
        if (number !== Math.floor(number)) {
            //Has a dec place
             number = Math.round(number);
         }  
       polygon = determineShape(number); 
    }
document.getElementById('getNumber').innerHTML = polygon; 
}
function determineShape(value){
    if (value == 0){
        return "NON EXISTENT";
    }
    if (value == 1){
        return "Mobius strip"
    }
    if (value == 2){
        return "Digon";
    }
    if (value == 3){
        return "Triangle";
    }
    if (value == 4){
        return "Quadrilateral";
    }
    if (value == 5){
        return "Pentagon";
    }
    if(value == 6){
        return "Hexagon";
    }
    if(value == 7){
        return "Heptagon";
    }
    if(value == 8){
        return "Octagon";
    }
    if(value == 9){
        return "Nonagon";
    }
    else if(value == 10){
        return "Decagon";
    }
    else{
        return "Invalid number";
    }
}
function GetJoke(){
    alert("What falls, but never needs a bandage? The rain.")
}
function GetSign(){
    alert("Peace.")
}
function GetAnimal(){
    alert("GOAT!")
}
function GetShoe(){
    alert("Nike Dunks.")
}



