import React from 'react';
import Item from './Item';

export default function Items({items}) {
  return (
    <main>
        {items.map(elem => 
            <Item elem={elem} key={elem.id} />
        )}
    </main>
  );
}