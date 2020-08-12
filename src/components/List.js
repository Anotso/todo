import React from 'react';

import ListItem from './ListItem';
import { useSelector } from 'react-redux';

function List() {

  const items = useSelector(state => state);
  // console.log(`Valor de items com useSelector: ${items} ,tipo ${Array.isArray(items)} e tamanho ${items.length}`);

  return (
    <ul>
      {items.map(item =>
        <ListItem key={item.id} item={item}></ListItem>
        )}
    </ul>
  );
}

export default List;