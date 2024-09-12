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
        'https://images.pexels.com/photos/22207914/pexels-photo-22207914/free-photo-of-a-black-and-white-photo-of-a-staircase.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
      )`;
  } else {
    textContent.style.backgroundImage = `url(https://images.pexels.com/photos/22806869/pexels-photo-22806869/free-photo-of-a-street-light-with-a-pole-and-a-pole.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load)`;
  }
  flagImageChanger = !flagImageChanger;
});