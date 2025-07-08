import { convert,power } from './codes.js';

const l_selects = document.querySelectorAll(".po-unit");


l_selects.forEach(element => {
    
    for(let units in power){
        const option = document.createElement("option");
        option.value = power[units];
        option.innerText = `${units} (${power[units]})`;

        if(element.name === "po-from" && power[units] === "kW"){
            option.selected = "selected";
        }else if(element.name === "po-to" && power[units] === "hp"){
            option.selected = "selected";
        }
        element.append(option);
    }
});


function getPower(){
    const inputLength = document.querySelector(".power .enter-value input");
    let length = inputLength.valueAsNumber;
    const from = document.querySelector("#po-from").value;
    const to = document.querySelector("#po-to").value;
    const output = document.querySelector(".po-output");

    if(isNaN(length) || length < 1){
        inputLength.value = 1;
        length = inputLength.valueAsNumber;
    };

    const Convertedlength = convert(length,from).to(to);
    output.innerText = `${length} ${from} = ${Convertedlength} ${to}`;
}

document.querySelector(".get-power").addEventListener("click",getPower);
window.addEventListener("load",getPower);
