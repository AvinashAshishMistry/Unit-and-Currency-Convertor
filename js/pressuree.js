import { convert,pressure } from './codes.js';

const l_selects = document.querySelectorAll(".p-unit");


l_selects.forEach(element => {
    
    for(let units in pressure){
        const option = document.createElement("option");
        option.value = pressure[units];
        option.innerText = `${units} (${pressure[units]})`;

        if(element.name === "p-from" && pressure[units] === "bar"){
            option.selected = "selected";
        }else if(element.name === "p-to" && pressure[units] === "atm"){
            option.selected = "selected";
        }
        element.append(option);
    }
});


function getPres(){
    const inputLength = document.querySelector(".pressure .enter-value input");
    let length = inputLength.valueAsNumber;
    const from = document.querySelector("#p-from").value;
    const to = document.querySelector("#p-to").value;
    const output = document.querySelector(".p-output");

    if(isNaN(length) || length < 1){
        inputLength.value = 1;
        length = inputLength.valueAsNumber;
    }

    const Convertedlength = convert(length,from).to(to);
    output.innerText = `${length} ${from} = ${Convertedlength} ${to}`;
}

document.querySelector(".get-pres").addEventListener("click",getPres);
window.addEventListener("load",getPres);