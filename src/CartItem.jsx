import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <div style={{ width: '70vw', maxWidth: '90rem', margin: '0px auto' }}>
      <div className="row" style={{ marginTop: '10px', marginLeft: '120px' }}>
        <div className="col-sm-2">
          <img
            src={img}
            alt={title}
            className="img-fluid"
            style={{ objectFit: 'cover', width: '5rem', height: '5rem' }}
          />
        </div>
        hi
      </div>
    </div>
  );
};

export default CartItem;
