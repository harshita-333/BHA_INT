function convertTemperature(){
    const inputTemperature = parseFloat(document.getElementById("inputtemp").value);
    const unit = document.getElementById("inputunit").value;
    let output;
    if(unit === "celsius"){
        output = (inputTemperature * 9/5 ) + 32;
        document.getElementById("display").textContent=  `${output.toFixed(2)}fahrenhite`;
    }
    else if(unit==="fahrenheit"){
        output= (inputTemperature-32)*5/9;
        document.getElementById("display").textContent =`${output.toFixed(2)}celsius`;
    }
}