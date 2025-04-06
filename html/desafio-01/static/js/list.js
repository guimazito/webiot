const getLocalStorage = () => JSON.parse(localStorage.getItem('db_items')) ?? []

function showLocalStorage() {
    let db_items = getLocalStorage()
    console.log(db_items)
    if (db_items.length === 0){
        document.getElementById("tableItems").textContent = "Nenhum dado salvo!"
    }
    const tableBody = document.querySelector("#tableItems tbody")
    db_items.forEach(item => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${item.name}</td><td>R$ ${item.price},00</td>`;
        tableBody.appendChild(row);
    });
}

showLocalStorage();