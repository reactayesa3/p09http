import React from 'react'
import { Link } from 'react-router-dom'

export default function Soporte() {
  return (
    <div className='container'>
        <h1>Soporte</h1>
        <Link to="/">
            <button>Volver a inicio</button>
        </Link>
    </div>
  )
}
