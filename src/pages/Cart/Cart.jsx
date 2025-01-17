import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dish } from '../../components/Dish/Dish';
import { clearCart } from '../../store/modules/cart/actions';
import { selectCartDishIds } from '../../store/modules/cart/selectors';

export const Cart = () => {
  const dishIds = useSelector(selectCartDishIds);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {dishIds.length > 0 ? (
        <div>
          {dishIds.map((dishId) => (
            <Dish dishId={dishId} />
          ))}
          <button onClick={() => dispatch(clearCart())}>Clear</button>
        </div>
      ) : (
        <span>Empty</span>
      )}
    </div>
  );
};
