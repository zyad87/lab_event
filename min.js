let contentChanger = document.querySelector('#contentChanger');
let fontSizeIncrease = document.querySelector('#fontSizeIncrease');
let fontSizeDecrease = document.querySelector('#fontSizeDecrease');
let changeColor = document.querySelector('#changeColor');
let changeBackground = document.querySelector('#changeBackground');
let changeBackgroundImage = document.querySelector('#changeBackgroundImage');

let textContent = document.querySelector('#text');

contentChanger.addEventListener('click', () => {
  textContent.innerText += ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia harum
  reiciendis nesciunt voluptatum ex blanditiis cupiditate id fugit beatae!
`;
});

textContent.style.fontSize = '20px';
let sizeFont = 20;

fontSizeIncrease.addEventListener('click', () => {
  sizeFont++;
  textContent.style.fontSize = `${sizeFont}px`;
});
fontSizeDecrease.addEventListener('click', () => {
  sizeFont--;
  textContent.style.fontSize = `${sizeFont}px`;
});

changeColor.addEventListener('click', () => {
  textContent.style.color =
    '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');
});
changeBackground.addEventListener('click', () => {
  textContent.style.backgroundColor =
    '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');
});
let flagImageChanger = true;
changeBackgroundImage.addEventListener('click', () => {
  if (flagImageChanger) {
    textContent.style.backgroundImage = `url(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntv5FbVb8Z38bFtsL9og7IPcvf9u5VplxIQ&s'
      )`;
  } else {
    textContent.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIStnAbvKDKBSEVmxnhxJssyxSRMu83shhw&s)`;
  }
  flagImageChanger = !flagImageChanger;
});
