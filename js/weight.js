import { convert,mass } from './codes.js';

const l_selects = document.querySelectorAll(".m-unit");


l_selects.forEach(element => {
    
    for(let units in mass){
        const option = document.createElement("option");
        option.value = mass[units];
        option.innerText = `${units} (${mass[units]})`;

        if(element.name === "m-from" && mass[units] === "kg"){
            option.selected = "selected";
        }else if(element.name === "m-to" && mass[units] === "lb"){
            option.selected = "selected";
        }
        element.append(option);
    }
});


function getMass(){
    const inputLength = document.querySelector(".weight .enter-value input");
    let length = inputLength.valueAsNumber;
    const from = document.querySelector("#m-from").value;
    const to = document.querySelector("#m-to").value;
    const output = document.querySelector(".m-output");

    if(isNaN(length) || length < 1){
        inputLength.value = 1;
        length = inputLength.valueAsNumber;
    }

    const Convertedlength = convert(length,from).to(to);
    output.innerText = `${length} ${from} = ${Convertedlength} ${to}`;
}

document.querySelector(".get-mass").addEventListener("click",getMass);
window.addEventListener("load",getMass);

