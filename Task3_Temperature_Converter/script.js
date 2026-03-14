function convertTemp(){

let temp = parseFloat(document.getElementById("temperature").value);
let from = document.getElementById("fromUnit").value;
let to = document.getElementById("toUnit").value;
let result = document.getElementById("result");

if(isNaN(temp)){
result.innerHTML = "Please enter a valid number!";
return;
}

let celsius;

if(from === "celsius"){
celsius = temp;
}

else if(from === "fahrenheit"){
celsius = (temp - 32) * 5/9;
}

else{
celsius = temp - 273.15;
}

let output;

if(to === "celsius"){
output = celsius;
}

else if(to === "fahrenheit"){
output = (celsius * 9/5) + 32;
}

else{
output = celsius + 273.15;
}

result.innerHTML = "Converted Temperature: " + output.toFixed(2);

}
