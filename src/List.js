import React from 'react';

function List(prosp) {

  return (
    <ul>
      {prosp.items.map(item =>
        <li key={item.id}>
          {item.text}
          <button onClick={()=>{prosp.onItemDeleted(item)}}>Excluir</button>
        </li>)}
    </ul>
  );
}

export default List;