let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) 
{
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
    showPopup('Item added to the cart!');
}


function updateCart() 
{
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    cartItemsElement.innerHTML = '';
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });
    totalElement.textContent = total.toFixed(2);
}



function showPopup(message) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    popup.style.display = 'block';
    overlay.style.display = 'block';
    overlay.addEventListener('click', closePopup);
    popup.querySelector('button').addEventListener('click', closePopup);
    setTimeout(closePopup, 3000);
}



function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}



const deliveryForm = document.getElementById('delivery-form');



deliveryForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const orderDetails = {
        cart: cart,
        deliveryDetails: {
            name: name,
            address: address,
            phone: phone,
            paymentMethod: paymentMethod
        }
    };
    console.log('Order details:', orderDetails);
    cart = [];
    total = 0;
    updateCart();
    showPopup('Order placed successfully! Thank you for your purchase.');
});



const menuSection = document.getElementById('menu');



function createMenuItem(name, description, price, imageUrl) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';

    menuItem.innerHTML = `
        <h2>${name}</h2>
        <img src="${imageUrl}" alt="${name}" class="menu-image">
        <p>${description}</p>
        <p>Price: $${price.toFixed(2)}</p>
        <button onclick="addToCart('${name}', ${price})">Add to Cart</button>
    `;

    menuSection.appendChild(menuItem);
}
createMenuItem('Mutton Biryani','Your meal is incomplete without Biryani🥘',14.99,'MuttonBiryani.jpg')
createMenuItem('Mutton',"Remembers the taste of spice",12.99,'MuttonCurry.jpg')
createMenuItem('Fried Mutton','Crispiness touches your heart',10.99,'FriedMutton.jpg')
createMenuItem('Mutton Kheema','Every bite makes you happy',9.99,'MuttonKheema.jpg')
createMenuItem('Chicken Biryani', 'Delicious biryani with spices 🐓🥘', 12.99, 'Biryani.jpg');
createMenuItem('Chicken','Get ready to feel the taste of  heaven',10.99,'ChickenCurry.jpeg')
createMenuItem('Butter Chicken','Reminds your home',10.99,'ButterChicken.jpg')
createMenuItem('Chicken Tikka','Makes your mouth tasty',8.99,'ChickenTikka.jpg')
createMenuItem('Fish Biryani','Makes your day',8.99,'FishBiryani.jpg')
createMenuItem('Fish',"Spices smells so far",8.99,'FishCurry.jpg')
createMenuItem('Fish Fry','Enjoy the grilled fish',7.99,'FishFry.jpg')
createMenuItem('Fish Tikka Masala','Masala melts your heart',9.99,'FishTikka.jpg')
createMenuItem('Butter Naan','Butter flavour make your day',5.99,'ButterNaan.jpeg')
createMenuItem('Rumali Roti','Are you ready to enjoy the joy of taste🧀',5.99,'RumaliRoti.jpg')
createMenuItem('Matar Paneer','Melts like anything 🥣',7.99,'MatarPaneer.png')
createMenuItem('Vegetable Pulao','Mixture of spices🥣',9.99,'Pulao.jpg')
createMenuItem('Chicken Pizza','Get ready to feel it🐓🍕',9.99,'ChickenPizza.jpg')
createMenuItem('Veg Pizza', 'Classic pizza with your favorite toppings🍕', 7.99, 'VegPizza.jpg');
createMenuItem('Panner Pizza','Welcome to the Paneer world🍕',8.99,'PaneerPizza.jpg')
createMenuItem("Corn Pizza",'Extra Cheese waters your mouth 🌽🍕🧀',7.99,'CornPizza.jpg')

