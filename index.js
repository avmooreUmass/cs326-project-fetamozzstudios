let userLoginInterface = document.getElementById("userLogin");

let div = document.createElement('div');
div.classList.add('loginInterface');
div.innerText="Test";

userLoginInterface.appendChild(div);

let graphic = document.getElementById("inventoryContainer");

graphic.innerHTML = '';

let img = document.createElement('img');
img.src = './test.jpg';

graphic.appendChild(img);
