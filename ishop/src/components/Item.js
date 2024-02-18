import React from 'react'

export default function Item({elem}) {
  return (
    <div className='item'>
        <img src={''} />
        <h2>{elem.title}</h2>
        <p>{elem.desc}</p>
        <b>{elem.price}</b>
        <div className='add-to-cart'>+</div>
    </div>
  )
}
