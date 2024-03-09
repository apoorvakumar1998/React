import React, { useState } from 'react';
import { addItem, updateItemQuantity } from '../utils/cartSlice';
import { IMAGE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';

const RestaurentMenuList = ({ menu }) => {
  const dispatch = useDispatch();
  const items = useSelector(store => store.cart.items);

  const addCartItem = (item, quantity = 1) => {
    // Check if the item is already in the cart
    const existingItem = items?.find(i => i.card.info.name === item.card.info.name);
    if (existingItem) {
      // Update the quantity of the existing item
      dispatch(updateItemQuantity({ id: existingItem.id, quantity: existingItem.quantity + quantity }));
    } else {
      // Add the new item to the cart
      dispatch(addItem(item));
    }
  };

  return (
    <div className="res-menu flex flex-col border border-stone-300 rounded-lg bg-gray-100">
      {menu.map(item => {
        const { name, defaultPrice, price, description, id, imageId } = item.card.info;
        const count = items?.find(i => name === i.card.info.name);
        const quantity = count?.quantity || 0;

        return (
          <div data-testid="items" className="menu-item inline-flex justify-between gap-4 py-3 p-4 border-b-1 border-black relative" key={id}>
            <div className="item-desc w-3/4">
              <span className='font-semibold font-sans'>{name}</span>
              <div>₹ {(defaultPrice || price) / 100}</div>
              <div>{description}</div>
            </div>
            <div className='w-1/4 flex items-center justify-end gap-2'>
              <div className="relative w-28 h-28 rounded-lg overflow-hidden">
                <img className="menu-img w-full h-full rounded-lg" alt="logo" src={IMAGE_URL + imageId}></img>
                {(
                  <div className='absolute top-0 left-0 mt-2 ml-2 text-black p-1 rounded-lg text-center bg-green-300'>
                    {quantity > 0 && (
                      <>
                        <button className='mr-2' onClick={() => addCartItem(item, -1)}>-</button>
                        <span>{quantity}</span>
                        <button className='ml-2' onClick={() => addCartItem(item, 1)}>+</button>
                      </>
                    )}
                    {quantity === 0 && (
                      <button onClick={() => addCartItem(item)}>Add</button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RestaurentMenuList;
