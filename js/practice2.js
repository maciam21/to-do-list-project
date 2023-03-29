


//Notes for day Week 11 Day 43:


//main.innerHTML = columnWrapper;


//function createCustomEl(element) {

main. appendChild(p);
pageWrapper.appendChild(main);
//function createCustomElEX(element, classes = ""){

function createCustomElEX(element, text, classes = []){
// NOTE: THese are parameters.
const el =document.createElement(element);  
if (element !== "main" || !element !== "div" || !element !== "footer") {
el.textContent = text; 
if (classes.length >= 1) {
el.classList.add(...classes);
} else {
//NOTE:  looking for a strict and not equal
}
//NOTE: "..." means anything in between 
return el;
}


const main2 = createCustomEl ("main", null, {"bg-info"});
const main = createCustomEl("main, ["bd-info"]");
//const header2 = createCustomEl("header");
const p3 = createCustomEl("p", "Hello, World!", );
main2.appendChild(p3);


console.log (main2);
pageWrapper.appendChild(main2);
//const ex = classes;

//return el + ex;


//NOTE: Functions are there to make your life easier 
//NOTE: It completes a task; be reusable; not supposed to be specific.
//const div = document.createElement("div")

//This is the perameter
//return el;
}
//NOTE: We need a placeholder adding "DIV" is too specific.


//NOTE: made this function too specific
//NOTE:can take up to 2 elements

//console.log("Triggered custom element!")
//const word = "KERN";

//NOTE: can work with or without quotes

//return word.toLocaleLowerCase;
// NOTE: Return something in this function back to you


//console.log (createCustonEl("ul"));
//NOTE: This is an argument

//function functionName ()

//const main2 = createCustomEl("main");
//const header2 = createCustomEl("header");
//console.log(main2,header2)