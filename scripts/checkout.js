import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts,loadProductsFetch } from "../data/products.js";

//import '../data/backend-practice.js';

 
async function loadPage(){


  //await loadProductsFetch();

   await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });



  renderOrderSummary();
  renderPaymentSummary();
//     


}

loadPage().then( (value) => {

});


// Promise .all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   })
// ]).then(() => {

//   return new Promise((resolve) => {
//     loadCart( () => {
//       resolve();
//     });

//   }).then
//   (() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//     console.log('Products loaded');
//   });
// });

// // loadProducts(()=> { 
// // });  
