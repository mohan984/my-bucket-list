
// Function to add new row
function addItem() {
    let category = document.getElementById("category").value;
    let goal = document.getElementById("goal").value;
    if (category === "" || goal === "") {
        alert("Please fill in both fields!");
        return;
    }

    let table = document.getElementById("bucketList");
    let row = table.insertRow(-1); // Insert at the end
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerText = category;
    cell2.innerText = goal;
    cell3.innerHTML = `<button class="remove-btn" onclick="removeRow(this)">Remove</button>`;

    // Clear input fields
    document.getElementById("category").value = "";
    document.getElementById("goal").value = "";
}

// Function to remove a row
function removeRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
