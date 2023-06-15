let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "plant 1",
        tag: "plant1",
        price: 20,
        incart: 0
    },

    {
        name: "plant 2",
        tag: "plant2",
        price: 25,
        incart: 0
    },

    {
        name: "plant 3",
        tag: "plant3",
        price: 30,
        incart: 0
    },

    {
        name: "plant 4",
        tag: "plant4",
        price: 35,
        incart: 0
    },

    {
        name: "plant 5",
        tag: "plant5",
        price: 40,
        incart: 0
    },

    {
        name: "plant 6",
        tag: "plant6",
        price: 45,
        incart: 0
    }
];

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=> {
        cartNumbers(products[i]);
        totalcost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;

    }

}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart += 1;
    } else{
        product.incart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    
    localStorage.setItem("productsIncart", JSON.stringify (cartItems));
}

function totalcost(product){

    let cartCost = localStorage.getItem('totalcost');
    
    console.log("My cart cost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalcost", cartCost + product.price);
    }else{
        localStorage.setItem("totalcost",product.price );
    }
}

/*--------------------------DISPLAY CART------------------------------------------------------------------


function displayCart(){
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);

    let productcontainer = document.querySelector(".products-container");

    if(cartItems && productcontainer){
        productcontainer.innerHTML ='';
        Object.values(cartItems).map(item =>{
            productcontainer.innerHTML += `
            <div class= "product">
            <ion-icon name="close-circle"></ion-icon>
            <img src= "./assets/images/${item.tag}.png">
            <span>${item.name}</span>
            </div>
            `
        });
    }
}  -------------------------------------------------------------------------------------------------*/

onLoadCartNumbers();
displayCart();
