import React from 'react';

const ListItem = ({
  description,
  owner,
  lang,
  watchers,
  title,
  avatar,
  url,
  fullName
}) => {
  return (
    <article className='list__item'>
      <div className='list__top'>
        <div className='list__avatar'>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='list__title'>
          <a className='list__link' href={url} target="_blank">
            {title} <span style={{fontSize: '18px'}}>({fullName})</span>
          </a>
        </div>
      </div>
      <div className='list__description'>
        <i>Описание:</i> <span>{description}</span>
      </div>
      <div className='list__owner'>
        <i>Владелец: </i>
        <span>{owner}</span>
      </div>
      <div className='list__other'>
        <div className='list__language'>
          <i>Язык: </i>
          <span>{lang}</span>
        </div>
        <div className='list__watchers'>
          <i>Подписчики: </i>
          <span>{watchers}</span>
        </div>
      </div>
    </article>
  );
};

export default ListItem;
