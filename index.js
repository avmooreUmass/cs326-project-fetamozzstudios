import {Inventory} from "./inventory.js";

const inventoryBag = new Inventory();
inventoryBag.render(document.getElementById('inventoryContainer'));
inventoryBag.render(document.getElementById("inventoryList"));

document.getElementById("addBtn").addEventListener("click", () =>{
    const newItem = document.getElementById("adding").value;
    const quant = parseInt(document.getElementById("quant").value);
    const iType = document.getElementById("type").value;

    inventoryBag.addItem(newItem, quant, iType);
});