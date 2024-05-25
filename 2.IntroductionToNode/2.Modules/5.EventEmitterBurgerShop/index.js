const PizzaShop = require("./5.1EventEmitterBurgerShop");

const pizzaShop = new PizzaShop();

pizzaShop.on("neworder", (orderNum, size, topp) => {
  console.log("ORDER RECIEVED ", orderNum, size, topp);

  // message user
  // message supervisor
  // message MCdonalds headquaters
  // message utkarsh
  // message India supervisor

  //
});

// SOME USER  has orderd the pizza.
pizzaShop.order("Medium", 10);
