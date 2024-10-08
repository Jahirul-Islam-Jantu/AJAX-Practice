async function getRequest() {
  document.querySelector("#loader").classList.remove("d-none")
  const URL = "http://164.68.107.70:6060/api/v1/ReadProduct";
  let res = await axios.get(URL);
  document.querySelector("#loader").classList.add("d-none")
  if (res.status === 200) {
    let list = res.data["data"];
    list.forEach((item) => {
      document.querySelector("#itemList").innerHTML +=`<tr> 
                        <td> ${item["ProductName"]} </td>
                        <td> ${item["ProductCode"]} </td>
                        <td> ${item["UnitPrice"]} </td>
                        <td> ${item["Qty"]} </td>
                        <td> ${item["TotalPrice"]} </td>
                        <td> <button onclick="deleteItem('${item['_id']}')"> Delete Item </button> </td>
                        <td> <button onclick="updateItem('${item['_id']}')"> Update Item </button> </td>
                    </tr>`;
    });
  } else {
    alert("error");
  }
}

async function deleteItem(id) {
  document.querySelector("#loader").classList.remove("d-none")
  let URL = `http://164.68.107.70:6060/api/v1/DeleteProduct/${id}`;
  let res = await axios.get(URL);
  if (res.status === 200) {
    alert("Successfully deleted");
    document.querySelector("#itemList").innerHTML = "";
    await getRequest();
  }
}

function updateItem(id) {
  window.location =  `update.html?id=${id}`
}



getRequest();
