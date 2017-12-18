import React from 'react';

const Menu = ({ list }) => {
  const newList = list.map(item => {
    const { name, price, description, image } = item;

    return (
      <div className="col-sm-4 product-box">
        <img src={item.image} height="150" />
        <p>
          <strong>{item.name}</strong>
        </p>
        <p>{item.price}</p>
        <p>{item.description}</p>
      </div>
    );
  });
  return (
    <div className="productsDisplay container">
      <div className="row">{newList}</div>
    </div>
  );
};

export default Menu;
