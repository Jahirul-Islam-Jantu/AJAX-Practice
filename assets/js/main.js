function getRequest(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    const requestOption = {method: 'GET'};


    fetch(url, requestOption).then(response => response.json()).then(result => console.log(result)).catch(err => console.log(err));
}

function postRequest(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    const bodyData = {
        "id": 13,
        name: "Jahirul Islam",
        username: "unchangedJahir",
        email: "jahirul@gmail.com",
        address: {
            street: "49",
            suite: "D",
            city: "Narayangonj",
            zipcode: "1451",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "+8801773427087",
        website: "jahirul-learn.org",
        company: {
            name: "Hope Agency",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    }
    const requestOption = {method: 'POST'},
        headers  = {'Accept': "application/json",'Content-Type': 'application/json'},
        body= JSON.stringify(bodyData);

    fetch(url, requestOption).then(response => response.json()).then(result => console.log(result)).catch(err => console.log(err));

}