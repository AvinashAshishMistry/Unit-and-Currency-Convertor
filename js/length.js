import { convert,lengthList } from './codes.js';

const l_selects = document.querySelectorAll(".l-unit");


l_selects.forEach(element => {
    
    for(let units in lengthList){
        const option = document.createElement("option");
        option.value = lengthList[units];
        option.innerText = `${units} (${lengthList[units]})`;

        if(element.name === "l-from" && lengthList[units] === "mi"){
            option.selected = "selected";
        }else if(element.name === "l-to" && lengthList[units] === "km"){
            option.selected = "selected";
        }
        element.append(option);
    }
});


function getLength(){
    const inputLength = document.querySelector(".length .enter-value input");
    let length = inputLength.valueAsNumber;
    const from = document.querySelector("#l-from").value;
    const to = document.querySelector("#l-to").value;
    const output = document.querySelector(".l-output");

    if(isNaN(length) || length < 1){
        inputLength.value = 1;
        length = inputLength.valueAsNumber;
    }

    const Convertedlength = convert(length,from).to(to);
    output.innerText = `${length} ${from} = ${Convertedlength} ${to}`;
}

document.querySelector(".get-length").addEventListener("click",getLength);
window.addEventListener("load",getLength);
