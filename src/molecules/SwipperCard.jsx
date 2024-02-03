import React from 'react';
import Counter from '../atoms/Counter';
import LikeButton from './LikeButton';

const SwipperCard = ({img, desc, price, stock, init, discount}) => {
  return (
    <div className='swip'>
      <LikeButton />
      <img src={img} alt="картинка товара" />
      <div className="swip__body">
        <p className='swip__title'>{desc}</p>
        {discount ? (
          <div className='swip__cont-discount'>
            <p className='swip__price swip__discount'>{price}</p>
            <p className='swip__discount-price'>{price}</p>
          </div>
        ) : (
          <p className='swip__price'>{price}</p>
        )}
        {
          stock === true ?
          <p className='swip__stock'>В наличии</p> 
          : <p className='swip__stock swip__stock-false'>Нет в наличии</p>
        }
        <p className='swip__comp'>Комплект</p>
        <Counter initialQuantity={init}/>
      </div>
    </div>
  );
};

export default SwipperCard;