import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { appStateAsync, selectLoading, selectUser } from '../store/stateSlice';

export default function Inicio() {

  const [authData, setAuthData] = useState({email: '', password: ''})
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  const handleOnChange = e => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(appStateAsync(authData));
  }

  return (
    <div className='container'>
        <h1>Bienvenid@ a nuestra aplicación</h1>
        {/* <Link to="/soporte">
            <button>Ayuda</button>
        </Link> */}
        {user.name === '' && 
      <form onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-100">
            <label>Email</label>
            <input type="text"
              value={authData.email}
              name="email"
              onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-100">
            <label>Contraseña</label>
            <input type="text"
              value={authData.password}
              name="password"
              onChange={handleOnChange} />
          </div>
        </div>
        <div className="row end">
          {loading ? <button disabled>Espere...</button> : <button type='submit'>Enviar</button>}
        </div>
      </form>
      }
    </div>
  )
}
