import React from 'react'
import "./style.css"
export default function EachBox({ imageUrl, title ,para}) {
  return (
      <div className='box' >
      <p className='Logo-box'><img src={ process.env.PUBLIC_URL + imageUrl}alt="کاریار" /></p>
          <h3>{title}</h3>
          <p>{para}</p>
      </div>
  )
}
