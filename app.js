const theme = document.querySelector(".theme-slider");
const themes = [
    ["hsl(222, 26%, 31%)", "hsl(223, 31%, 20%)", "hsl(224, 36%, 15%)", "hsl(225, 21%, 49%)", "hsl(224, 28%, 35%)", "hsl(6, 63%, 50%)", "hsl(6, 70%, 34%)", "hsl(30, 25%, 89%)", "hsl(28, 16%, 65%)", "hsl(221, 14%, 31%)"],
    ["hsl(0, 0%, 90%)", "hsl(0, 5%, 81%)", "hsl(0, 0%, 93%)", "hsl(185, 42%, 37%)", "hsl(185, 58%, 25%)", "hsl(25, 98%, 40%)", "hsl(25, 99%, 27%)", "hsl(45, 7%, 89%)", "hsl(35, 11%, 61%)", "hsl(60, 10%, 19%)"],
    [" hsl(281, 89%, 26%)", "hsl(285, 91%, 52%)",  "hsl(268, 71%, 12%)", "hsl(176, 100%, 44%)", "hsl(177, 92%, 70%)", "hsl(268, 47%, 21%)", "hsl(290, 70%, 36%)", "hsl(52, 100%, 62%)", "hsl(198, 20%, 13%)", "hsl(198, 20%, 13%)",],
]


theme.addEventListener('change', () => {
    document.documentElement.style.setProperty('--main-background', themes[theme.value][0]);
    document.documentElement.style.setProperty('--toggle-background', themes[theme.value][1]);
    document.documentElement.style.setProperty('--screen-background', themes[theme.value][2]);
    document.documentElement.style.setProperty('--key-background-1', themes[theme.value][3]);
    document.documentElement.style.setProperty('--key-shadow-1', themes[theme.value][4]);
    document.documentElement.style.setProperty('--key-background-2', themes[theme.value][5]);
    document.documentElement.style.setProperty('--key-shadow-2', themes[theme.value][6]);
    document.documentElement.style.setProperty('--key-background-3', themes[theme.value][7]);
    document.documentElement.style.setProperty('--key-shadow-3', themes[theme.value][8]);
    document.documentElement.style.setProperty('--text', themes[themes[theme.value][9]]);
})

let calculation = "", isFunction = true, usedComa = false;
const numbers = document.querySelectorAll(".number");
const functions = document.querySelectorAll(".function");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const submit = document.querySelector(".submit");
const coma = document.querySelector(".coma");

const displayCalculation = (currentCalculation) => {
    const result = document.querySelector("#result");
    result.innerText = currentCalculation;
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        calculation += number.innerText;
        isFunction = false;
        displayCalculation(calculation);
    })
})

functions.forEach((item) => {
    item.addEventListener("click", () => {
        if(isFunction == true || usedComa == true) return;
        switch (item.innerText){
            case "+": calculation += "+"; break; 
            case "-": calculation += "-"; break; 
            case "x": calculation += "*"; break; 
            case "/": calculation += "/"; break; 
            default: return;
        }
        isFunction = true;
        usedComa = false;
        displayCalculation(calculation);
    })
})

coma.addEventListener("click", () => {
    if(isFunction == true || usedComa == true) return;
    calculation += ".";
    displayCalculation(calculation);
    usedComa = true;
})

del.addEventListener("click", () => {
    calculation = calculation.slice(0, calculation.length - 1);
    displayCalculation(calculation);
})


reset.addEventListener("click", () => {
    calculation = ""
    isFunction = true;
    usedComa = false;
    displayCalculation(calculation);
})

submit.addEventListener("click", () => {
    calculation = eval(calculation);
    displayCalculation(calculation);
})

