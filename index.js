alert("For better experience open in Desktop Mode or pc.")

import { countryList} from './js/codes.js'

const selects = document.querySelectorAll(".code-flag select");

selects.forEach(element => {
    for (let cuurcode in countryList) {

        let newOption = document.createElement("option");
        newOption.innerText = cuurcode;
        newOption.value = cuurcode;

        if (element.name === "from" && cuurcode === "USD") {
            newOption.selected = "selected";
        } else if (element.name === "to" && cuurcode === "INR") {
            newOption.selected = "selected";
        }
        element.append(newOption);
    }
    element.addEventListener("change", (evt) => {
        updateFlags(evt.target);
    });
});


function updateFlags(element) {
    const countryCode = countryList[element.value];
    const img = element.parentElement.querySelector('img');
    const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    img.src = newSrc;
}


async function getExchangeRate() {

    const amount = document.querySelector(".enter-value input");
    let amountValue = amount.valueAsNumber;

    const from = document.querySelector("#from");
    const fromCC = from.value;

    const to = document.querySelector("#to");
    const toCC = to.value;

    const exchngeRate = document.querySelector(".output");

    const lastUpdate = document.querySelector(".last-updated")


    const data = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCC}`);
    const rates = await data.json();

    if (isNaN(amountValue) || amountValue < 1) {
        amount.value = 100;
    }
    amountValue = amount.valueAsNumber;
    const rate = rates.rates[toCC];
    exchngeRate.innerHTML = `${amountValue} ${fromCC} = ${(rate * amountValue).toFixed(4)} ${toCC}`;
    lastUpdate.innerHTML = `Last Updated : ${rates.date}`;
};


window.addEventListener("load", getExchangeRate);
document.querySelector(".get-output").addEventListener("click", getExchangeRate);




function show(){
    const allUnits = document.querySelector(".all-units");
    const unitsHas = allUnits.classList;
    
    if(unitsHas.contains("sa-anime")){
        allUnits.classList.add("ra-anime");
        allUnits.classList.remove("sa-anime");
    }
    else{
        allUnits.classList.remove("ra-anime");
        allUnits.classList.add("sa-anime");
    }
}

document.querySelector(".show").addEventListener("click",show);




const unit = document.querySelectorAll(".units");

for(let i = 0 ; i<unit.length;i++){
    unit[i].addEventListener("click",(evt)=>{
        change(evt.target);
    },false);
}

function change(element){
    
    show();
    const eleClass = element.classList;
    let targetAName ;
    
    if(! eleClass.contains("units")){
        targetAName = element.parentElement.lastElementChild.innerText;
    }else{
        targetAName = element.lastElementChild.innerText;
    }

    targetAName = targetAName.toLowerCase();

    const targetA = document.querySelector(`.${targetAName}`);
    const targetB = document.querySelector(".top");

    if(targetB.classList.contains(targetAName)){
        return;
    }
    
    targetB.style.cssText = "box-shadow: none;";
    
    targetA.style.animation = "moveB 3s ease-in-out forwards";
    targetB.style.animation = "moveA 3s ease-in-out forwards";
    
    setTimeout(()=>{
        targetB.classList.remove("top");
        targetB.removeAttribute("style");
        targetA.classList.add("top");

    }, 3000);

    console.log(targetAName,targetA, targetB);


}