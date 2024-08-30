const cartContainer = document.getElementById('cart-container');
let cartArray = [
    {
        id: "1",
        name: "Oneplus Nord CE4 (Dark Chrome, 8GB RAM, 128GB Storage)",
        image: 'https://m.media-amazon.com/images/I/417odtnpERL._SX300_SY300_QL70_FMwebp_.jpg',
        price: 10000,
        quantity: 1,
        color: 'Dark Chrome'
    },
    {
        id: "2",
        name: "iQOO Z9s Pro 5G (Flamboyant Orange, 8GB RAM, 128GB Storage) | Snapdragon 7 Gen 3 Processor | 120 Hz Curved AMOLED",
        image: 'https://m.media-amazon.com/images/I/711ZTkL0l8L._AC_AA180_.jpg',
        price: 15000,
        quantity: 1,
        color: 'Dark Chrome',
    },
    {
        id: "3",
        name: "Oneplus Nord CE4 (Dark Chrome, 8GB RAM, 128GB Storage)",
        image: 'https://m.media-amazon.com/images/I/61nO5YRaAxL._AC_AA180_.jpg',
        price: 5000,
        quantity: 1,
        color: 'Dark Chrome',
    },
    {
        id: "4",
        name: "Oneplus Nord CE4 (Dark Chrome, 8GB RAM, 128GB Storage)",
        image: 'https://m.media-amazon.com/images/I/61nO5YRaAxL._AC_AA180_.jpg',
        price: 4000,
        quantity: 1,
        color: 'Dark Chrome',
    },
    {
        id: "5",
        name: "Oneplus Nord CE4 (Dark Chrome, 8GB RAM, 128GB Storage)",
        image: 'https://m.media-amazon.com/images/I/61nO5YRaAxL._AC_AA180_.jpg',
        price: 4500,
        quantity: 1,
        color: 'Dark Chrome',
    },
];

const getCartCardItem = (product) => {
    return (
        `
        <div class="cart-card">
            <div class="cart-view">
                <img src="${product.image}">
            </div>
            <div class="card-description">
                <div class="cart-item-name">
                    <span class="">${product.name}</span>
                </div>
                <div class="cart-item-available">
                    <span>In stock</span>
                </div>
                <div class="cart-item-amazon-lable">
                    <span>Eligile for Free Shipping</span>
                    <div class="cart-item-amazon-lable-div"></div>
                </div>
                <div class="cart-item-colors">
                    <span style="color: black;font-weight: bold;font-size: .85rem;">Colours : </span>
                    ${product.color}
                </div>
                <div class="cart-add-remove-container">
                    <div class="">
                        Quantity : <span id="cart-item-quantity">${product.quantity}</span>
                    </div>
                    <div class="cart-item-remove-add-btns">
                        <button product-number='${product.id}' class="inc-dec-btn" value="1">+</button>
                        <button product-number='${product.id}' class="inc-dec-btn" value="0">–</button>
                        <button product-number='${product.id}' id="remove-btn" value="2">remove</button>
                    </div>
                </div>
            </div>
            <div class="cart-item-price-section">
                <div class="cart-item-price-container">
                    <div id="cart-item-price">₹${product.price}.00<span class="back-side-top">00</span>
                    </div>
                    <span id="cart-item-mrp"></span>
                </div>
            </div>
        </div>
        <hr>
    `
    )
};

const totalQuantityOfCart = document.getElementById('total-quantity');
const totalPriceOfCart = document.getElementById('total-price');

function injectCartItems() {

    cartContainer.innerHTML = '';
    totalPriceOfCart.innerText = '0';
    totalQuantityOfCart.innerText = '0';

    console.log(totalPriceOfCart.innerText)

    for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].quantity === 0)
            continue;

        cartContainer.innerHTML += getCartCardItem(cartArray[i]);
        totalPriceOfCart.innerText = Number.parseInt(totalPriceOfCart.innerText) + (cartArray[i].price * cartArray[i].quantity);
        totalQuantityOfCart.innerText = Number.parseInt(totalQuantityOfCart.innerText) + cartArray[i].quantity;
    }
}

function LoadCart() {

    injectCartItems();

    const IncDecBtn = document.querySelectorAll('.inc-dec-btn,#remove-btn');
    console.log(IncDecBtn)
    let changed = true;

    for (let i = 0; changed && i < IncDecBtn.length; i++) {

        IncDecBtn[i].addEventListener('click', (event) => {

            // event.preventDefault();

            const operation = Number.parseInt(event.target.getAttribute('value'))
            const curr__id = event.target.getAttribute('product-number');
            console.log(curr__id, operation)

            for (let index = 0; changed && index < cartArray.length; index++) {

                if (cartArray[index].id === curr__id) {
                    if (operation === 1) {
                        console.log("In Increment");
                        cartArray[index].quantity += 1;
                    }
                    else if (operation === 0 && cartArray[index].quantity !== 0) {
                        console.log("In Decrement");
                        cartArray[index].quantity -= 1;
                    }
                    else {
                        cartArray[index].quantity = 0;
                    }
                    changed = false;
                }
            }

            if (changed === false) {
                LoadCart();
                // for (let j = 0; j < IncDecBtn.length; j++) {
                //     IncDecBtn[j].removeEventListener();
                // }
            }
        })
    }


    console.log('Execution is here')
    return;
}


document.addEventListener('DOMContentLoaded', (event) => {
    LoadCart();
})
