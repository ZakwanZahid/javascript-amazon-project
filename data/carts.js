export const cart = [];

export function addToCart( productID) {
  let matchingItem;

    cart.forEach( cartItem => {
      if (cartItem.productID === productID) {
       matchingItem = cartItem; 
      }
    });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } 
        else {  
        cart.push({
          productID: productID,
          quantity: 1
        });
      }
}
