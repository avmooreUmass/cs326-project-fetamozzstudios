// Create the user login interface 
let userLoginInterface = document.getElementById("userLogin");

let div = document.createElement('div');
div.classList.add('loginInterface');
div.innerText="Test";

userLoginInterface.appendChild(div);

// Create the container for the inventory

let container = document.getElementById("inventoryContainer");
container.innerHTML = '';


// Show the current item image, details
let currentItem = document.createElement('div');
currentItem.classList.add("description");
let img = document.createElement('img');
img.src = './test.jpg';

currentItem.appendChild(img);

let desc = document.createElement('p')
desc.classList.add('description');
desc.innerText = "This is a test description";

currentItem.appendChild(desc);

// Create a scrollable table containing inventory items
const testItems =
[
    "Sword+1",
    "Staff",
    "Mage Hand Scroll",
    "Axe+3",
    "Staff of Rage",
    "Fire Arrows",
    "Deaths Embrace",
    "Ice Arrows",
    "Poison Dagger"
];

let inventoryList = document.getElementById("inventoryList");
let inventoryTable = document.createElement('table');
inventoryTable.classList.add("inventoryTable");

// Add the headers for the items
let itemName = document.createElement('th');
itemName.classList.add("inventoryTable");
itemName.innerText = "Weapon";
let quantity = document.createElement('th');
quantity.classList.add("inventoryTable");
quantity.innerText = "Amount";

inventoryTable.appendChild(itemName);
inventoryTable.appendChild(quantity);

let tableBody = document.createElement('tbody');

for (let item in testItems)
{
    let row = document.createElement('tr');
    row.classList.add("inventoryTable");
    let invI = document.createElement('td');
    invI.classList.add("inventoryTable");

    invI.innerText = testItems[item];

    row.appendChild(invI);
    tableBody.appendChild(row);

}

inventoryTable.appendChild(tableBody);

// Append all items to the container to display them
container.appendChild(currentItem);
inventoryList.appendChild(inventoryTable);

