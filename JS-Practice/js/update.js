fillExistingProduct()
async function fillExistingProduct(){
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')


    let URL = `http://164.68.107.70:6060/api/v1/ReadProductByID/${id}`;
    document.querySelector("#loader").classList.remove("d-none")
    let res = await axios.get(URL)
    document.querySelector("#loader").classList.add("d-none")

    if (res.status === 200){
        let items = res.data['data'][0]
        document.querySelector("#productId").value = items['_id'];
        document.querySelector("#productName").value = items['ProductName'];
        document.querySelector("#productCode").value = items['ProductCode'];
        document.querySelector("#productImg").value = items['Img'];
        document.querySelector("#unitPrice").value = items['UnitPrice'];
        document.querySelector("#productQnt").value = items['Qty'];
        document.querySelector("#productTotal").value = items['TotalPrice'];

    }
}

async function UpdateData(){
    let productId = document.querySelector("#productId").value
    let productName =document.querySelector("#productName").value
    let productCode =document.querySelector("#productCode").value
    let productImage =document.querySelector("#productImg").value
    let productUnitPrice =document.querySelector("#unitPrice").value
    let productQty =document.querySelector("#productQnt").value
    let TotalPrice =document.querySelector("#productTotal").value

    let URL = `http://164.68.107.70:6060/api/v1/UpdateProduct/${productId}`;
    document.querySelector("#loader").classList.remove("d-none")

    let res = await axios.post(URL, {
        Img: productImage,
        ProductCode: productCode,
        ProductName: productName,
        Qty: productQty,
        TotalPrice: TotalPrice,
        UnitPrice: productUnitPrice,
    })
    document.querySelector("#loader").classList.add("d-none")
    if (res.status === 200){
        alert("Successfully updated")
        window.location = "showProduct.html"
    }else{
        alert("error updating product")
    }

}
