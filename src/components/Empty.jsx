import React from 'react';
import nf from '../img/not-found.jpg';

const Empty = ({ isFirst }) => {
  return (
    <div className='empty'>
      {isFirst ? (
        <h2>Сделайте запрос в поле сверху</h2>
      ) : (
        <div>
          <h3>Ничего не найдено</h3>
          <img src={nf} alt='not-found' />
        </div>
      )}
    </div>
  );
};

export default Empty;
