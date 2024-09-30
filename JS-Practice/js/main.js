async function getRequest(){
    const URL = 'http://164.68.107.70:6060/api/v1/ReadProduct'
    let res = await axios.get(URL, (response) => response);
    if(res.status === 200){
        window.location = "showProduct.html?"
    }else {
        console.log("error")
    }
}




