import React from 'react';
import standImage from '../assets/banner.png';

const NewsCard = ({ status }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className='news__card' onClick={handleClick} style={{ cursor: 'pointer' }}>
      {status ? <img src={standImage} alt="реклама" /> : <div></div>}
    </div>
  );
};

export default NewsCard;
