import React from 'react';
import Counter from '../atoms/Counter';

const SwipperCard = ({img, desc, price, stock, init}) => {
  return (
    <div className='swip'>
      <img src={img} alt="картинка товара" />
      <div className="swip__body">
        <p className='swip__title'>{desc}</p>
        <p className='swip__price'>{price}</p>
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