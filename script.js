let chemicals = [
    { id: 1, chemicalName: "Ammonium Persulfate", vendor: "LG Chem", density: "3525.92", viscosity: "60.63", packaging: "Bag", packSize: "100.00", unit: "kg", quantity: "6495.18" },
    { id: 2, chemicalName: "Caustic Potash", vendor: "Formosa", density: "3172.15", viscosity: "48.22", packaging: "Bag", packSize: "100.00", unit: "kg", quantity: "8751.90" },
    { id: 3, chemicalName: "Dimethylaminopropylamino", vendor: "LG Chem", density: "8435.37", viscosity: "12.62", packaging: "Barrel", packSize: "75.00", unit: "L", quantity: "5964.61" },
    { id: 4, chemicalName: "Mono Ammonium Phosphate", vendor: "Sinopec", density: "1597.65", viscosity: "76.51", packaging: "Bag", packSize: "105.00", unit: "kg", quantity: "8183.73" },
    { id: 5, chemicalName: "Ferric Nitrate", vendor: "DowDuPont", density: "364.04", viscosity: "14.90", packaging: "Bag", packSize: "105.00", unit: "kg", quantity: "4154.33" },
    { id: 6, chemicalName: "n-Pentane", vendor: "Sinopec", density: "4535.26", viscosity: "66.76", packaging: "N/A", packSize: "N/A", unit: "L", quantity: "6272.34" },
    { id: 7, chemicalName: "Glycol Ether PM", vendor: "LG Chem", density: "6495.18", viscosity: "72.12", packaging: "Bag", packSize: "250.00", unit: "kg", quantity: "8749.54" },
];

// Render the table with dynamic data
function renderTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    chemicals.forEach(chemical => {
        const row = document.createElement('tr');

        if (chemical.isNew) {
            // Render editable input fields for new rows
            row.innerHTML = `
                <td><input type="checkbox" /></td>
                <td><input type="text" value="${chemical.chemicalName}" onchange="editChemical(${chemical.id}, 'chemicalName', this.value)" /></td>
                <td><input type="text" value="${chemical.vendor}" onchange="editChemical(${chemical.id}, 'vendor', this.value)" /></td>
                <td><input type="text" value="${chemical.density}" onchange="editChemical(${chemical.id}, 'density', this.value)" /></td>
                <td><input type="text" value="${chemical.viscosity}" onchange="editChemical(${chemical.id}, 'viscosity', this.value)" /></td>
                <td><input type="text" value="${chemical.packaging}" onchange="editChemical(${chemical.id}, 'packaging', this.value)" /></td>
                <td><input type="text" value="${chemical.packSize}" onchange="editChemical(${chemical.id}, 'packSize', this.value)" /></td>
                <td><input type="text" value="${chemical.unit}" onchange="editChemical(${chemical.id}, 'unit', this.value)" /></td>
                <td><input type="text" value="${chemical.quantity}" onchange="editChemical(${chemical.id}, 'quantity', this.value)" /></td>
            `;
        } else {
            // Render static non-editable text for existing rows
            row.innerHTML = `
                <td><input type="checkbox" /></td>
                <td>${chemical.chemicalName}</td>
                <td>${chemical.vendor}</td>
                <td>${chemical.density}</td>
                <td>${chemical.viscosity}</td>
                <td>${chemical.packaging}</td>
                <td>${chemical.packSize}</td>
                <td>${chemical.unit}</td>
                <td>${chemical.quantity}</td>
            `;
        }

        tableBody.appendChild(row);
    });
}

// Function to edit a specific chemical's property
function editChemical(id, property, value) {
    const chemical = chemicals.find(c => c.id === id);
    if (chemical) {
        chemical[property] = value;
    }
}

// Add a new row
function addRow() {
    const newChemical = {
        id: chemicals.length + 1,
        chemicalName: 'New Chemical',
        vendor: 'New Vendor',
        density: 'N/A',
        viscosity: 'N/A',
        packaging: 'N/A',
        packSize: '0',
        unit: 'kg',
        quantity: '0.00',
        isNew: true
    };
    chemicals.push(newChemical);
    renderTable();
}

// Move the selected row up
function moveRowUp() {
    const checkedRows = [...document.querySelectorAll('tbody input[type="checkbox"]:checked')];
    checkedRows.forEach(checkbox => {
        const rowIndex = [...checkbox.parentElement.parentElement.parentElement.children].indexOf(checkbox.parentElement.parentElement);
        if (rowIndex > 0) {
            const temp = chemicals[rowIndex];
            chemicals[rowIndex] = chemicals[rowIndex - 1];
            chemicals[rowIndex - 1] = temp;
            renderTable();
        }
    });
}

// Move the selected row down
function moveRowDown() {
    const checkedRows = [...document.querySelectorAll('tbody input[type="checkbox"]:checked')];
    checkedRows.forEach(checkbox => {
        const rowIndex = [...checkbox.parentElement.parentElement.parentElement.children].indexOf(checkbox.parentElement.parentElement);
        if (rowIndex < chemicals.length - 1) {
            const temp = chemicals[rowIndex];
            chemicals[rowIndex] = chemicals[rowIndex + 1];
            chemicals[rowIndex + 1] = temp;
            renderTable();
        }
    });
}

// Delete the selected row
function deleteRow() {
    const checkedRows = [...document.querySelectorAll('tbody input[type="checkbox"]:checked')];
    checkedRows.forEach(checkbox => {
        const rowIndex = [...checkbox.parentElement.parentElement.parentElement.children].indexOf(checkbox.parentElement.parentElement);
        chemicals.splice(rowIndex, 1);
    });
    renderTable();
}

// Save the data (here, just log it)
function saveData() {
    console.log('Saving data:', chemicals);
}

renderTable();  // Initial rendering of the table
