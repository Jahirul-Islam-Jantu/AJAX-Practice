async function getRequest(){
    const URL = 'http://164.68.107.70:6060/api/v1/ReadProduct'
    // const requestOption = {method: 'GET'};
    //
    //
    // fetch(URL, requestOption).then(response => response.json()).then(result => console.log(result)).catch(err => console.log(err));
    let res = await axios.get(URL, (response) => response);
    if(res.status === 200){
        document.write(JSON.stringify(res.data));
    }else {
        console.log("error")
    }
}




