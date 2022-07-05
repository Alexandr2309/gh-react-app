import React from 'react';
import ListItem from './ListItem';
import TotalCount from './TotalCount';
import Empty from './Empty';
import { MagicSpinner } from 'react-spinners-kit';

const List = ({ list, isFirst, isSearch }) => {
  return (
    <section className='list' style={{ background: '#ffffff' }}>
      <TotalCount list={list} display={list.slice(0, 10).length} />
      {isSearch && (
        <div style={{ margin: '0px auto', paddingTop: '35px' }}>
          <MagicSpinner color='#24292f' size={110} loading={true} />
        </div>
      )}
      {list.length && !isSearch
        ? list
            .slice(0, 10)
            .map((item) => (
              <ListItem
                key={item.id}
                owner={item.owner.login}
                title={item.title}
                watchers={item.watchers}
                url={item.url}
                lang={item.lang}
                avatar={item.owner.avatar}
                fullName={item.fullName}
                description={item.description}
              />
            ))
        : !isSearch && <Empty isFirst={isFirst} />}
    </section>
  );
};

export default List;
