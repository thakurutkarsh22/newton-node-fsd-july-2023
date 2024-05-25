const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  #orderNumber = 0;

  order(size, toppings) {
    this.#orderNumber++;

    // THIS IS BAD.

    // message user
    // message supervisor
    // message MCdonalds headquaters
    // message utkarsh
    // message India supervisor

    // THe above code is madness
    // what if we broadcast
    this.emit("neworder", this.#orderNumber, size, toppings);
  }

  displayOrder() {
    console.log("Order Number: ", this.#orderNumber);
  }
}

// export default PizzaShop // THIS IS NOT HOW WE EXPORT IN NODE..

module.exports = PizzaShop;
