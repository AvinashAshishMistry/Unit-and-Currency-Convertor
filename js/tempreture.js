import { convert,tempreture } from './codes.js';

const l_selects = document.querySelectorAll(".t-unit");


l_selects.forEach(element => {
    
    for(let units in tempreture){
        const option = document.createElement("option");
        option.value = tempreture[units];
        option.innerText = `${units} (°${tempreture[units]})`;

        if(element.name === "t-from" && tempreture[units] === "C"){
            option.selected = "selected";
        }else if(element.name === "t-to" && tempreture[units] === "F"){
            option.selected = "selected";
        }
        element.append(option);
    }
});


function getTemp(){
    const inputLength = document.querySelector(".tempreture .enter-value input");
    let length = inputLength.valueAsNumber;
    const from = document.querySelector("#t-from").value;
    const to = document.querySelector("#t-to").value;
    const output = document.querySelector(".t-output");

    if(isNaN(length)){
        inputLength.value = 1;
        length = inputLength.valueAsNumber;
    }

    const Convertedlength = convert(length,from).to(to);
    output.innerText = `${length} °${from} = ${Convertedlength} °${to}`;
}

document.querySelector(".get-temp").addEventListener("click",getTemp);
window.addEventListener("load",getTemp);
// console.log(convert(1, "atm").to("mmH2O"));