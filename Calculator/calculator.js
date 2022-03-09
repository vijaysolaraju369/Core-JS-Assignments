let historyEl=document.getElementById("history");
let resultEl=document.getElementById("result");
let totalEl=document.getElementById("total");
let count=0
let containerId="calc"

function clearScreen() {
    resultEl.value = "";
    totalEl.value="";
}

function display(value) {
    resultEl.value += value;
}
function calculate() {
    let calculationEl = resultEl.value;
    console.log(calculationEl)
    let totalValue = eval(calculationEl);
    totalEl.value = totalValue;

    count+=1;
    let uniqueId=containerId+count;
    let taskContainerEl=document.createElement("div");

    taskContainerEl.setAttribute("id",uniqueId);
    taskContainerEl.setAttribute("class","history")
    historyEl.appendChild(taskContainerEl);

    let paraEl=document.createElement("p");
    paraEl.innerHTML="input : " + calculationEl;
    taskContainerEl.appendChild(paraEl);
    let paratotalEl=document.createElement("p");
    paratotalEl.innerHTML="Output : " + totalValue;
    taskContainerEl.appendChild(paratotalEl);
}
