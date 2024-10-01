async function fillExistingProduct(){
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')


    let URL = `http://164.68.107.70:6060/api/v1/ReadProductByID/${id}`;
    document.querySelector("#loader").classList.remove("d-none")
    let res = await axios.get(URL)
    document.querySelector("#loader").classList.add("d-none")

    if (res.status === 200){
        let items = res.data['data'][0]
        document.querySelector("")
    }
}