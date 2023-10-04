function CALCULATE(){
    console.log("Calling calculate function");
    const celsinput = document.getElementById("c");
    const result = document.getElementById("f")
    const value = parseFloat(celsinput.value);
    
    const fahrenheit = (value * 9/5) + 32;
    result.innerHTML = `${fahrenheit}`;
    console.log(fahrenheit);
}