const request = require('request')

const url = "https://fakestoreapi.com/products"


request({url:url, json:true},(error, response)=>{
    if(error){
        console.log('Opps!! Something went wrong')
    }
    else if(response.body.error){
        console.log('unable to find product')
    }
    else{
        console.log(response.body[1])
    }
})