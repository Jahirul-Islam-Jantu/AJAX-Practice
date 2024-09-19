function getRequest(){
    const url = 'http://164.68.107.70:6060/api/v1/ReadProduct'
    const requestOption = {method: 'GET'};


    fetch(url, requestOption).then(response => response.json()).then(result => console.log(result)).catch(err => console.log(err));
}

function postRequest(){
    const url = 'http://164.68.107.70:6060/api/v1/CreateProduct'
    const bodyData = {
        img: "123",
        ProductCode: "123",
        ProductName: "Test Product",
        Qty: "Test Qty",
        TotalPrice: "123",
        UnitPrice: "123",
    }
    const requestOption = {method: 'POST'},
        headers  = {'Accept': "application/json",'Content-Type': 'application/json'},
        body= JSON.stringify(bodyData);

    fetch(url, requestOption).then(response => response.json()).then(result => console.log(result)).catch(err => console.log(err));

}