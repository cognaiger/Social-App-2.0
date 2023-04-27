import React from 'react';
import Product from '../../components/product/Product.jsx';
import './marketplace.scss';

const Marketplace = () => {
  return (
    <div className="marketplace-products">
      <h1 className="marketplace-products__title">Marketplace - Products</h1>

      <div className="product-list">
        <Product 
          name="Product 1"
          description="Description of Product 1"
          image="product1.jpg"
          price="$10"
        />

        <Product 
          name="Product 2"
          description="Description of Product 2"
          image="product2.jpg"
          price="$20"
        />

        {/* Add more products here */}
      </div>
    </div>
  );
};

export default Marketplace;