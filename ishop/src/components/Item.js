import React from 'react'

export default function Item({elem}) {
  return (
    <div className='item'>
        <img src={'./img/' + elem.img} />
        <h2>{elem.title}</h2>
        <p>{elem.desc}</p>
        <b>{elem.price} руб.</b>
        <div className='add-to-cart'>+</div>
    </div>
  )
}
