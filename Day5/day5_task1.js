let items = [];

function createItem(item) {
    items.push(item);
    console.log(`✅ "${item}" has been added.`);
}

function readItems() {
    if (items.length === 0) {
        console.log("📂 No items found.");
    } else {
        console.log("📂 Items in the array:");
        items.forEach((item, index) => {
            console.log(`${index}: ${item}`);
        });
    }
}

function updateItem(index, newValue) {
    if (index >= 0 && index < items.length) {
        console.log(`✏️ Updated "${items[index]}" to "${newValue}"`);
        items[index] = newValue;
    } else {
        console.log("❌ Invalid index.");
    }
}

function deleteItem(index) {
    if (index >= 0 && index < items.length) {
        console.log(`🗑️ Deleted "${items[index]}"`);
        items.splice(index, 1);
    } else {
        console.log("❌ Invalid index.");
    }
}

createItem("Apple");
createItem("Banana");
readItems();
updateItem(1, "Mango");
readItems();
deleteItem(0);
readItems();
