//  document.getElementById("count-el").innerText= 5;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


let count = 0;

function increment(){
    count++;
    countEl.innerText = count;
}

function decrement(){
    count--;
    countEl.innerText = count;
}

function save(){
let countStr = count + " ,";

saveEl.textContent += countStr;
countEl.textContent = 0;
count = 0;
}



// Concepts
// let username = "Rishi"
// let para = "You have three new notification"
// let final = `${username} ${para}`;
// console.log(final);
