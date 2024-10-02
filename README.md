# Chemical Supplies Table

## Overview
This project is a web-based application to manage and manipulate chemical supply data. It displays a table of chemicals with details such as chemical name, vendor, density, viscosity, packaging, pack size, unit, and quantity. Users can add, edit, move, and delete rows, as well as save the data to the local storage for persistence across page reloads.

## Features

- **Editable Table**: Users can edit chemical information directly within the table.
- **Dynamic Data Handling**: Add new rows, move rows up and down, or delete rows.
- **Checkbox for Row Selection**: Allows selecting rows for operations like moving or deleting.
- **Persistent Data**: The data is saved to the browser's `localStorage` for persistence.
- **Responsive Design**: The application is designed to be responsive and work across different screen sizes.

## Technologies Used

- **HTML5**: For structuring the content of the web page.
- **CSS3**: For styling the table and buttons.
- **JavaScript**: For handling the dynamic functionality of the table (rendering, editing, saving).
- **localStorage**: For saving the data on the client-side, allowing it to persist after page reloads.

## How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/chemical-supplies-table.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd chemical-supplies-table
   ```

3. **Open the `index.html` file** in any browser.

## Usage

### Adding a New Row
- Click on the ➕ button at the top-right corner to add a new row to the table. This will create a row with default values which you can edit.

### Editing Existing Rows
- Each row is editable. Click into any cell to change the value of that chemical's property.
- Upon changing a value, it automatically updates the `chemicals` array in memory.

### Moving Rows
- Use the ⬆️ and ⬇️ buttons to move the selected row(s) up or down in the table.

### Deleting Rows
- Select the checkboxes next to the rows you want to delete, then click on the 🗑️ button to remove them.

### Saving Data
- Clicking the 🔄 button will save the current state of the chemicals array to the browser's local storage. This allows the data to persist even after the page is refreshed.

### Refreshing Data
- Upon page reload, the table will load data from the local storage if available, restoring the previous state of the table.

## Example Data

| ✓  | Chemical Name              | Vendor       | Density (g/m³) | Viscosity (m²/s) | Packaging | Pack Size | Unit | Quantity |
|----|----------------------------|--------------|----------------|------------------|-----------|-----------|------|----------|
|    | Ammonium Persulfate        | LG Chem      | 3525.92        | 60.63            | Bag       | 100.00    | kg   | 6495.18  |
|    | Caustic Potash             | Formosa      | 3172.15        | 48.22            | Bag       | 100.00    | kg   | 8751.90  |
|    | Dimethylaminopropylamino   | LG Chem      | 8435.37        | 12.62            | Barrel    | 75.00     | L    | 5964.61  |
|    | Mono Ammonium Phosphate    | Sinopec      | 1597.65        | 76.51            | Bag       | 105.00    | kg   | 8183.73  |
|    | Ferric Nitrate             | DowDuPont    | 364.04         | 14.90            | Bag       | 105.00    | kg   | 4154.33  |

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. You can help by fixing bugs, improving the user interface, or adding new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Sections:
- **Overview**: Brief description of the project and its purpose.
- **Features**: Key functionalities of the project.
- **Technologies Used**: A list of technologies used in the project (HTML, CSS, JavaScript, localStorage).
- **How to Run**: Instructions to clone and run the project locally.
- **Usage**: Detailed usage instructions for adding/editing rows, moving, deleting, saving, and refreshing data.
- **Example Data**: Example table with chemical data.
- **Contributing**: Guidelines for contributing to the project.
- **License**: The type of open-source license for the project.

You can modify this file to include specific details for your project, like your GitHub username or license type if different.
