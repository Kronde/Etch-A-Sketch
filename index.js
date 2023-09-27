const buttonChangeSize = document.getElementById("btn-size");
const buttonBlack = document.getElementById("color-black");
const buttonRandom = document.getElementById("color-random");
const buttonReset = document.getElementById("reset");

let sizeText = document.getElementById("size");

let drawing = false;
let color = 1;
createBoard(32);

buttonChangeSize.addEventListener("click", function(){
    let size = prompt("What size do you want ?");
    if (size > 0 && size < 100){
        resetDiv();
        createBoard(size);
        sizeText.textContent = size;
    }
    else{
        alert("Invalid size, please stay between 1 and 100");
    }
})

buttonBlack.addEventListener("click",function(){
    color = 1;
})
buttonRandom.addEventListener("click", function(){
    color = 2;
})

buttonReset.addEventListener("click",resetDiv)

function createBoard(size){

let containerRight = document.querySelector("#container-right");

containerRight.style.gridTemplateColumns = `repeat(${size},1fr)`;
containerRight.style.gridTemplateRows = `repeat(${size},1fr)`;

let numbsDiv = size * size;

for (let index = 0; index < numbsDiv; index++) {
    let div = document.createElement("div");
    div.classList.add("box");

    div.addEventListener("mousedown",function(){
        drawing = true;
    })
    div.addEventListener("mouseup", function(){
        drawing = false;
    })

    div.addEventListener("mouseover", function(){
        if(drawing == true){
            if (color == 1){
                div.style.backgroundColor = "black";
            }
            else{
                div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
        }
    })

    containerRight.appendChild(div);
}

}


function resetDiv(){
    let reset = document.querySelectorAll("div");
    reset.forEach(element => {
        element.style.backgroundColor = "white";
    });
}