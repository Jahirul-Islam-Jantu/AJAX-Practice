const axios = <script src="./axios.min.js"></script>
async function createData(){
    let productName = document.querySelector("#productName").value;
    let productCode = document.querySelector("#productCode").value;
    let productImg = document.querySelector("#productImg").value;
    let unitPrice = document.querySelector("#unitPrice").value;
    let productQnt = document.querySelector("#productQnt").value;
    let productTotal = document.querySelector("#productTotal").value;

    let url = 'http://164.68.107.70:6060/api/v1/CreateProduct'
    document.querySelector("#loader").classList.remove("d-none")

    let res = await axios.post(url, {
        img: productImg,
        ProductCode: productCode,
        ProductName: productName,
        Qty: productQnt,
        TotalPrice: productTotal,
        UnitPrice: unitPrice,
    })
    document.querySelector("#loader").classList.add("d-none")

    if (res.status === 200) {
        window.location = "index.html"
    }else {
        alert("error creating product")
    }

}