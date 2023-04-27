import React from 'react';

const Product = ({ name, description, image, price }) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt={name} />
      </div>
      <div className="product__info">
        <h2 className="product__name">{name}</h2>
        <p className="product__description">{description}</p>
        <div className="product__price">{price}</div>
        <button className="product__button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;