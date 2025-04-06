const getLocalStorage = () => JSON.parse(localStorage.getItem('db_items')) ?? []
const setLocalStorage = (dbItems) => localStorage.setItem('db_items', JSON.stringify(dbItems))

const create_item = () => {
    let name = document.getElementById('name').value
    let price = document.getElementById('price').value
    const dbItem = getLocalStorage()
    dbItem.push({
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
    })
    setLocalStorage(dbItem)
    alert('Item Salvo com Sucesso!')
}

document.getElementById('submitButton').addEventListener('click', create_item)