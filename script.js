// Product Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of the item
    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to add items to the cart
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Method to remove items from the cart by product ID
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to calculate the total cost of items in the cart
    getTotal() {
        return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }

    // Method to display cart items
    displayCart() {
        if (this.items.length === 0) {
            console.log("The cart is empty.");
        } else {
            console.log("Shopping Cart:");
            this.items.forEach(item => {
                console.log(`- ${item.product.name}: $${item.product.price} x ${item.quantity} = $${item.calculateTotalPrice()}`);
            });
            console.log(`Total: $${this.getTotal()}`);
        }
    }
}

// Testing the classes

// Create products
const product1 = new Product(1, "Laptop", 1200.00);
const product2 = new Product(2, "Smartphone", 800.00);
const product3 = new Product(3, "Headphones", 150.00);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart again
cart.displayCart();
