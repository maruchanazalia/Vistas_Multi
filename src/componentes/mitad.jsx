import React from 'react'
import '../style/mitad.css'
import Logo from '../img/vitaly_logo.png'

export default function mitad() {
  return (
    <div>
        <div className='mitad'>
        <img className='img' src={Logo} alt="Logo" />
        <h1 className='titulo'>VITALITY</h1>
        <h1 className='titulo'>TRACKER</h1>
        </div>
    </div>
  )
}
