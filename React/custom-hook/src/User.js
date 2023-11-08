import React, { useState } from 'react'
import './reset.css'

export default function User({data, handleDelete}) {
  const [isActive, setIsActive] = useState(data.active);

  return ( <li>
    <p style={{color : isActive ? 'green': 'black', fontWeight: 'bold', marginRight: '10px'}} 
      onClick={() =>  setIsActive(prev => !prev)}>
      {data?.username}
    </p>
    <p style={{marginRight: '5px'}}>({data?.email})</p>
    <button type='button' onClick={() => handleDelete(data.id)}>삭제</button>
  </li>
  )
}
