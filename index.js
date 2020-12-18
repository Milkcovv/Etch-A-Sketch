let container = document.querySelector('.container');

let divElement = document.createElement('div');

let breakElement = document.createElement('br');

const divNum= parseInt(prompt("Enter a number"));

for(let i = 0; i < divNum; i++){
  let breakElement = document.createElement('br');
    for(let j = 0; j < divNum; j ++){
    let divElement = document.createElement('div');
    divElement.style.display = 'inline-block'
    divElement.classList.add("pixelDiv")
    container.appendChild(divElement);
    }
  container.appendChild(breakElement);
}


const pixelDiv = document.querySelectorAll('.pixelDiv');
pixelDiv.forEach(div =>{
  div.addEventListener('click',() =>{
    div.style.backgroundColor = 'red';
  })
}) 

