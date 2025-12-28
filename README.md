# Amazon Project

A fully functional e-commerce website built with vanilla JavaScript, HTML, and CSS. This project demonstrates modern web development practices including modular code structure, local storage for cart persistence, and dynamic DOM manipulation.

## Features

### 🛍️ Shopping
- Browse products with images, ratings, and prices
- Add/remove items from cart
- Real-time cart quantity updates
- Product search and filtering

### 🛒 Checkout
- Dynamic order summary with product details
- Flexible delivery options with cost calculations
- Real-time order total calculations
- Tax estimation (10%)
- Cart item deletion with live updates

### 💾 Data Persistence
- Local storage integration to save cart data
- Cart persists across browser sessions
- Automatic savings on cart changes

### 📦 Delivery Options
- Multiple shipping speeds available:
  - Free 7-day delivery
  - $4.99 for 3-day delivery
  - $9.99 for next-day delivery
- Dynamic date calculations using Day.js

## Project Structure

```
javascript-amazon-project/
├── amazon.html              # Main shopping page
├── checkout.html            # Checkout page
├── orders.html              # Orders page
├── tracking.html            # Order tracking page
├── data/
│   ├── products.js         # Product data and getProduct() function
│   ├── carts.js            # Cart management (add, remove, update)
│   └── deliveryOptions.js  # Delivery option data
├── scripts/
│   ├── amazon.js           # Main shopping page logic
│   ├── checkout.js         # Checkout page entry point
│   └── checkout/
│       ├── orderSummary.js    # Renders cart items
│       └── paymentSummary.js  # Renders order totals
├── styles/
│   ├── shared/             # Global styles
│   └── pages/              # Page-specific styles
└── images/                 # Product images and icons
```

## Technologies Used

- **JavaScript (ES6+)**: Modular code with import/export
- **HTML5**: Semantic markup
- **CSS3**: Responsive design with flexbox/grid
- **Day.js**: Date manipulation and formatting
- **Local Storage API**: Data persistence

## Key Functions

### Cart Management (`data/carts.js`)
- `addToCart(productID)` - Add item or increase quantity
- `removeFromCart(productID)` - Remove item from cart
- `updateDeliveryOption(productId, deliveryOptionId)` - Update shipping method

### Product Data (`data/products.js`)
- `getProduct(productId)` - Get product details by ID

### Delivery Options (`data/deliveryOptions.js`)
- `getDeliveryOption(optionId)` - Get delivery option details

### Rendering (`scripts/checkout/`)
- `renderOrderSummary()` - Display cart items and delivery options
- `renderPaymentSummary()` - Display order totals and calculations

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server (VS Code Live Server or similar)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ZakwanZahid/javascript-amazon-project.git
cd javascript-amazon-project
```

2. Start a local server:
   - **VS Code**: Use Live Server extension
   - **Python**: `python -m http.server 8000`
   - **Node.js**: `npx http-server`

3. Open in browser:
```
http://localhost:5500/amazon.html
```

## Features in Detail

### Shopping Cart
- Add products to cart from the main page
- Cart persists in browser's local storage
- View cart summary on checkout page
- Delete items instantly

### Order Summary
- Real-time product details (name, price, image)
- Quantity display and editing
- Multiple delivery date options
- Live price updates when changing delivery method

### Payment Summary
- Itemized breakdown:
  - Product cost
  - Shipping cost
  - Subtotal
  - Tax (10%)
  - **Final total**
- Dynamic calculations based on cart contents

## Future Enhancements

- [ ] Product filtering and search
- [ ] User authentication and accounts
- [ ] Order history tracking
- [ ] Payment processing integration
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist functionality

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Learning Outcomes

This project demonstrates:
- ES6 module system (import/export)
- DOM manipulation and event listeners
- Array methods (forEach, find, filter, map)
- Template literals and string interpolation
- Local Storage API
- Object-oriented programming concepts
- Functional programming patterns
- Date/time handling with libraries
- Responsive web design
- Git version control

## License

MIT License - feel free to use this project for learning purposes

## Author

**Zakwan Zahid** - [@ZakwanZahid](https://github.com/ZakwanZahid)

## Support

For issues or questions, please open an issue on GitHub.

---

**Happy coding!** 🚀
