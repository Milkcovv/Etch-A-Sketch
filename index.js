let container = document.querySelector('.container');

let divElement = document.createElement('div');

let breakElement = document.createElement('br');

for(let i = 0; i < 16; i++){
  let breakElement = document.createElement('br');
    for(let j = 0; j < 16; j ++){
    let divElement = document.createElement('div');
    divElement.style.display = 'inline-block'
    container.appendChild(divElement);
    }
  container.appendChild(breakElement);
}