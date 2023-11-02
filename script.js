//array of items
const items = [{
    title: "This was our pact",
    quantity: 0,
    img: "./assets/book1.png",
    price: 7.49
    
},
{
    title: "The Famous Five",
    quantity: 0,
    img: "./assets/book2.png",
    price: 4.59
},
{
    title: "Matlida",
    quantity: 0,
    img: "./assets/book3.png",
    price: 6.80
},
{
    title: "Harry Potter",
    quantity: 0,
    img: "./assets/book4.png",
    price: 10
},
{
    title: "For Young Readers",
    quantity: 0,
    img: "./assets/book5.png",
    price: 7.29
},
{
    title: "Wimpy Kid - DIY",
    quantity: 0,
    img: "./assets/book6.png",
    price: 4.99
},
{
    title: "Dart Board",
    quantity: 0,
    img: "./assets/dart-board.png",
    price: 17.49
},

{
    title: "Connect 4",
    quantity: 0,
    img: "./assets/connect-four.png",
    price: 19.99
},

{
    title: "Jenga",
    quantity: 0,
    img: "./assets/jenga.png",
    price: 20.99
},

{
    title: "Monopoly",
    quantity: 0,
    img: "./assets/monopoly.png",
    price:19.49
},

{
    title: "Bookmarks",
    quantity: 0,
    img: "./assets/bookmarks.png",
    price: 12.49
},

{
    title: "Birthday Card",
    quantity: 0,
    img: "./assets/birthday-card.png",
    price: 19.99
},

{
    title: "Stuffed toys",
    quantity: 0,
    img: "./assets/stuffed-toy.png",
    price: 15.99
},

{
    title: "Dream Catcher Drawing",
    quantity: 0,
    img: "./assets/dream-catcher.png",
    price:18.49
}
]

let cartCount = document.getElementById("cart");
let addCartButton = document.getElementsByClassName("add-cart");
let cartPopup = document.getElementById("popup");
let count = 0;
cartCount.innerHTML = 0;
let totalQuantity = 0;
let totalPrice = 0;
let cross = document.getElementById("cross");
let viewCart = document.getElementById("header-text");
let cartList = document.getElementById("blur");
let orderNow = document.getElementById("order-now")

let userChoice = [];
let itemCount = 0;




//this is to update the cart
for (let i = 0; i < items.length; i++){
    addCartButton[i].addEventListener ("click", () => {
        console.log(addCartButton)
        items[i].quantity++;
        cartCount.innerHTML = ++count;
        totalQuantity++;
        
    })  
}




//to change the price each time an item is added
function updatePrice(){
    userChoice.forEach((el) =>{
        totalPrice += el.quantity*(el.price);
        console.log(totalPrice);
    })
    return totalPrice; 


}

//to view cart items
viewCart.addEventListener ("click", () => {
    cartList.innerHTML = "";
    cartPopup.style.display = "block";
    cartPopup.style.color = "white";
    cartList.style.display = "block";
    show();

})

cross.addEventListener ("click", () => {
    cartPopup.style.display = "none";
})


//api part 2
// %0A newline
// %20 space++


function updateWhatsappLink (){
    let link = "https://api.whatsapp.com/send?phone=7018224197&text=Hey,%0ABelow%20is%20your%20order%0A" 

    for (let i = 0; i < items.length; i++){
        if (items[i].quantity !== 0){
            link += "Item%20name:%20" + encodeURIComponent(items[i].title) + "%0A" + "Quantity%20purchased:%20" + encodeURIComponent(items[i].quantity) + "%0A";
        }
    }
    return link;
}

// orderNow.onclick = () => {
//     window.open(updateWhatsappLink(), "_blank")
// }


function show(){
    userChoice = items.filter((item) => {
        return item.quantity != 0;
    })
    userChoice.forEach((el)=>{
        cartList.innerHTML += `
        <div id="cart-container">
        <img src="${el.img}"> <br>
        <span>Title: "${el.title}"</span> <br>
        <span>Quantity purchased: ${el.quantity}</span>
        </div>
        `
    })
    cartList.innerHTML +=`<span id="final-price">Grand Total: ${updatePrice().toPrecision(4)}</span>`;
    cartList.innerHTML += `<span id="order-now"><a style="text-decoration:none; color:white;" href=${updateWhatsappLink()} rel="api">Order now </a></span>`;
}
