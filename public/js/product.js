const onSubmithandler = (e) => {
    e.preventDefault();
    const product = e.target.productName.value;

    const obj = {
        "productName": product
    };

    axios.post('http://localhost:4000' + "/products", obj).then((response) => {
        console.log(response.data.value);
    })
}