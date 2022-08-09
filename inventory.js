export class Inventory
{
    constructor()
    {
        this.items =
        {
            'Sword+1': 1,
            'Staff': 1,
            'Mage Hand Scroll': 1,
            'Axe+3': 1,
            'Staff of Rage': 1, 
            'Fire Arrows': 20,
            'Deaths Embrace': 1,
            'Ice Arrows': 10,
            'Poison Dagger': 1
        };

        this.type =
        [
            "Weapon",
            "Weapon",
            "Consumable",
            "Weapon",
            "Weapon",
            "Consumable",
            "Misc",
            "Consumable",
            "Weapon"
        ]
    };

    /**
     * The render function will be used to build the web app.
     */
    render(element)
    {
        element.innerHTML = '';

        if (element.id === "inventoryContainer")
        {
            // Display the current item
            let currentItem = document.createElement('div');
            currentItem.classList.add("description");
            let img = document.createElement('img');
            img.src = './test.jpg';
        
            let desc = document.createElement('p');
            desc.classList.add("description");
            desc.innerText = "This is a test description";

            currentItem.appendChild(img);
            currentItem.appendChild(desc);

            element.appendChild(currentItem);
        }
        else if (element.id === "inventoryList")
        {
            // Display the inventory list

            let inventoryTable = document.createElement('table');
            inventoryTable.classList.add("inventoryTable");

            // Add the header for item names
            let itemName = document.createElement('th');
            itemName.classList.add("inventoryTable");
            itemName.innerText = "Name";

            // Add the header for the number of items
            let quantity = document.createElement('th');
            quantity.classList.add("inventoryTable");
            quantity.innerText = "Quantity";

            // Add the header for the type of item
            let iType = document.createElement('th');
            iType.classList.add("inventoryTable");
            iType.innerText = "Type";

            inventoryTable.appendChild(itemName);
            inventoryTable.appendChild(quantity);
            inventoryTable.appendChild(iType);

            // Create the body of the inventory list
            let listBody = document.createElement('tbody');
            let cntr = 0;

            for (let item in this.items)
            {
                let row = document.createElement('tr');
                row.classList.add("inventoryTable");

                let invI = document.createElement('td');
                invI.classList.add("inventoryTable");

                let invQ = document.createElement('td');
                invQ.classList.add("inventoryTableNum");

                let invT = document.createElement('td');
                invT.classList.add("inventoryTable");

                invI.innerText = item;
                invQ.innerText = this.items[item];
                invT.innerText = this.type[cntr];
                cntr++;

                row.appendChild(invI);
                row.appendChild(invQ);
                row.appendChild(invT);
                listBody.appendChild(row);
            }

            inventoryTable.appendChild(listBody);

            element.appendChild(inventoryTable);
        }
    }

    addItem(iName, quantity, type)
    {
        if (this.items[iName])
        {
            this.items[iName] += quantity;
        }
        else
        {
            this.items[iName] = quantity;
            this.type.push(type);
        }

        this.render(document.getElementById("inventoryList"));
    }
}



// Create the user login interface 
let userLoginInterface = document.getElementById("userLogin");

let div = document.createElement('div');
div.classList.add('loginInterface');
div.innerText="Test";

userLoginInterface.appendChild(div);


