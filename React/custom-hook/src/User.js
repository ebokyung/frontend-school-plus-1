import React, { useState } from 'react'
import './reset.css'

export default function User({data}) {
  const [isActive, setIsActive] = useState(data.active);

  return ( <li key={data.id}>
    <p style={{color : isActive ? 'green': 'black', fontWeight: 'bold', marginRight: '10px'}} 
      onClick={() =>  setIsActive(prev => !prev)}>
      {data?.username}
    </p>
    <p style={{marginRight: '5px'}}>({data?.email})</p>
    <button type='button'>삭제</button>
  </li>
  )
}
