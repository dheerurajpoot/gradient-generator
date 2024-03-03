let button1 = document.querySelector("#button");
let button2 = document.querySelector("#button2");
let copyCode = document.querySelector("#gradient");
let logo = document.querySelector(".logo");


let GenerateColor = ()=>{
    let colorCode = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + colorCode[Math.floor(Math.random()* 16)]
    }
    return color;
}
let color1 = "#6A02FB"
let color2 = "#DB1255"

let handleColor1 = ()=>{
    color1 = GenerateColor()
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1} , ${color2}`
    copyCode.innerHTML = `background-image: linear-gradient(to right, ${color1} , ${color2}`
    button1.style.backgroundColor = color1;
    button1.innerHTML = color1;
}
let handleColor2 = ()=>{
   color2 = GenerateColor()
   document.body.style.backgroundImage = `linear-gradient(to right, ${color1} , ${color2}`
   copyCode.innerHTML = `background-image: linear-gradient(to right, ${color1} , ${color2}`
   button2.style.backgroundColor = color2;
   button2.innerHTML = color2;
   
}

let copyToClipBoard = ()=>{
    navigator.clipboard.writeText(copyCode.textContent);
    alert("Copied the Code to Clipboard: " + copyCode.textContent);
}
copyCode.addEventListener("click", copyToClipBoard);

button1.addEventListener('click', handleColor1)
button2.addEventListener('click', handleColor2)