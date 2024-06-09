// João Victor Santos Ruas

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('addRowButton').addEventListener('click', () => {
        const table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        const rowCount = table.rows.length;
        cell1.textContent = `Dados ${rowCount}.1`;
        cell2.textContent = `Dados ${rowCount}.2`;

        newRow.style.backgroundColor = rowCount % 2 === 0 ? '#f9f9f9' : '#ffffff';
    });
});