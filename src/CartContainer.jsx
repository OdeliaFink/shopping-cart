import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import CartItem from './CartItem';

const CartContainer = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  console.log('🚀 ~ file: CartContainer.jsx:8 ~ CartContainer ~ items:', items);

  return (
    <>
      <h2 className="lead-mb-0 mt-2"> Your shopping cart</h2>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </>
  );
};

export default CartContainer;
