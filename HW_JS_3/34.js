'use strict'

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8, price: 78,
    },
];
//  почему не работает так как я написал в комментарии ниже???

//let photoproducts = products.filter(function(photo) {photo.photos in photo && photo.photos.length > 0});
let photoproducts = products.filter(photo => "photos" in photo && photo.photos.length);



 
console.log(photoproducts);


// если метод sort сортирует на месте, то зачем создавать  новый массив? из-за наличия функции?
const productSortedByPrice = products.sort(function(item1, item2) {
    return item1.price - item2.price;
});

console.log(productSortedByPrice);


