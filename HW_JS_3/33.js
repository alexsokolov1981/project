'use strict'
const products = [
    { id: 3,price: 200,},
    {id: 4,price: 900,},
    { id: 1, price: 1000, },
    ];

    

 products.forEach(function(lessprice){
    lessprice.price = lessprice.price / 100 * 85;
});

console.log(products);
    

