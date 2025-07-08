import { convert,area } from './codes.js';

const l_selects = document.querySelectorAll(".a-unit");


l_selects.forEach(element => {
    
    for(let units in area){
        const option = document.createElement("option");
        option.value = area[units];
        option.innerText = `${units} (${area[units]})`;

        if(element.name === "a-from" && area[units] === "km²"){
            option.selected = "selected";
        }else if(element.name === "a-to" && area[units] === "ac"){
            option.selected = "selected";
        }
        element.append(option);
    }
});


function getArea(){
    const inputLength = document.querySelector(".area .enter-value input");
    let length = inputLength.valueAsNumber;
    const from = document.querySelector("#a-from").value;
    const to = document.querySelector("#a-to").value;
    const output = document.querySelector(".a-output");

    if(isNaN(length) || length < 1){
        inputLength.value = 1;
        length = inputLength.valueAsNumber;
    }

    const Convertedlength = convert(length,from).to(to);
    output.innerText = `${length} ${from} = ${Convertedlength} ${to}`;
}

document.querySelector(".get-area").addEventListener("click",getArea);
window.addEventListener("load",getArea);
