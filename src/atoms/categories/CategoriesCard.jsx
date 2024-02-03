import React from 'react';

const CategoriesCard = ({name, quantity, img}) => {
  return (
    <div className='categori'>
      <div className="categori__head">
        <p>{name}</p>
        <p>{quantity}</p>
      </div>
        <img src={img} alt="изображение категории" />
    </div>
  );
};

export default CategoriesCard;