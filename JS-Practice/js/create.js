

async function CreateData() {
    let productName = document.querySelector("#productName").value;
    let productCode = document.querySelector("#productCode").value;
    let productImg = document.querySelector("#productImg").value;
    let unitPrice = document.querySelector("#unitPrice").value;
    let productQnt = document.querySelector("#productQnt").value;
    let productTotal = document.querySelector("#productTotal").value;

    let URL = "http://164.68.107.70:6060/api/v1/CreateProduct"
    document.querySelector("#loader").classList.remove("d-none")



    let res = await axios.post(URL, {
        Img: productImg,
        ProductCode: productCode,
        ProductName: productName,
        Qty: productQnt,
        TotalPrice: productTotal,
        UnitPrice: unitPrice,
    })

    document.querySelector("#loader").classList.add("d-none")


    if (res.status === 200) {
        alert("Successfully created")
        // document.querySelector("#form").reset()
        document.querySelector("#productName").value = "";
        document.querySelector("#productCode").value = "";
        document.querySelector("#productImg").value = "";
        document.querySelector("#unitPrice").value = "";
        document.querySelector("#productQnt").value = "";
        document.querySelector("#productTotal").value = "";
    }else {
        alert("error creating product")
    }

}