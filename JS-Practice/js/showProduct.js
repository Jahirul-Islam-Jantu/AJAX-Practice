
    async function getRequest(){
        window.location = 'showProduct.js'
    const URL = 'http://164.68.107.70:6060/api/v1/ReadProduct'
        let res = await axios.get(URL);
        if(res.status === 200){

            let list = res.data['data'];
            list.forEach((item) => {
                document.querySelector("#itemList").innerHTML += (`
                    <tr> 
                        <td> ${item['ProductName']} </td>
                        <td> ${item['ProductCode']} </td>
                        <td> ${item['UnitPrice']} </td>
                        <td> ${item['Qty']} </td>
                        <td> ${item['TotalPrice']} </td>
                        <td> <button onclick="deleteItem(${item['_id']})"> Delete Item </button> </td>
                        <td> <button onclick="updateItem(${item['_id']})"> Update Item </button> </td>
                    </tr>`);
            })
        }else {
            alert("error")
        }
    }
