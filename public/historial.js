const socket = io.connect()

//   Products historial ----------------
socket.on('productsAll', (arrProd) => {
    renderProduct(arrProd)
})

const renderProduct = (arrProd) => {
    const arrayProd = JSON.parse(arrProd)

    const html = arrayProd.map((element) => {
        return (`<tr>
                    <td class="text-center"><strong>${element.id}</strong></td>
                    <td class="text-center">${element.title}</td>
                    <td class="text-center">$${element.price}</td>
                    <td class="text-center"><img src='${element.thumbnail}' width="120" height="100"></td>
                    <td class="text-center">${element.thumbnail}</td>
                </tr>`)
    }).join(" ");

    document.getElementById('mostrarProductos').innerHTML = html

    const htmlProdList = 
        ( `<caption id="capProdList">Total Product List ${arrayProd.length}</caption>`)

    document.getElementById('capProdList').innerHTML = htmlProdList
}