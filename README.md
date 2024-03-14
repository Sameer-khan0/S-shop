# S-Shop

S-Shop is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project aims to provide a seamless shopping experience with features such as authentication, a shopping cart, wishlist functionality, and more. Whether you're a customer looking for products or an admin managing the store, S-Shop has got you covered.

## Features

### Authentication
- User registration and login with secure authentication.
- Protected routes ensuring only authenticated users can access certain parts of the application.
- Password hashing for enhanced security.

### Shopping Cart
- Users can add products to their cart, update quantities, and remove items.
- Seamless integration with the checkout process.
- Real-time updates to reflect changes in the cart.

### Wishlist
- Users can add products to their wishlist for future reference.
- Easy management of wishlist items with options to remove or move to cart.

### Product Management
- Admins can add, update, and delete products from the inventory.
- Detailed product information including images, descriptions, and pricing.

### Order Management
- Users can view their order history and track the status of their orders.
- Admins can manage orders, update statuses, and view order details.

### Search and Filtering
- Powerful search functionality allowing users to find products quickly.
- Filters to narrow down search results based on various criteria such as price range, category, etc.

### Responsive Design
- S-Shop is built with responsiveness in mind, ensuring a seamless experience across devices of all sizes.

## Getting Started

To get started with S-Shop on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/s-shop.git`
2. Navigate to the project directory: `cd s-shop`
3. Install dependencies:
   ```
   cd client
   npm install
   cd ..
   cd server
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the server directory and add necessary environment variables such as database connection URI, JWT secret, etc.
5. Seed the database (optional): If you want to populate the database with sample data, run `npm run seed` in the server directory.
6. Start the development server:
   ```
   cd ..
   npm run dev
   ```

## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the creators and maintainers of the MERN stack, as well as the numerous open-source libraries and frameworks that made this project possible.
