class ShoppingCart {
    constructor(){
        this.items = []
    }
    getItems(){
        return this.items
    }
    addItems(itemName, quantity, price){
        return this.items.push(itemName, quantity, price)
    }
    clearItems(){
        return this.items =[]
    }
};

const cart = new ShoppingCart();
//console.log(cart);
cart.getItems(); //Items should be an empty array, initially
//const cartFull = new ShoppingCart(["trash can", 1, 15.5]);
//console.log(cartFull.addItems(["trash can", 1, 15.5]));
cart.addItems(["Name of the item", 1 ,99.99]);
console.log(cart.getItems());
cart.clearItems();
//console.log(cart.clearItems());



module.exports = ShoppingCart;


    
