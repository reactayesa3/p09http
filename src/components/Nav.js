import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout, selectUser } from '../store/stateSlice'

export default function Nav() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <nav>
        <div>
            {user.name !== '' ? 
                <>
                    <button onClick={handleLogout}>Cerrar sesión</button> {user.name }
                </>
                : 
                <h1>App</h1>}
        </div>
        <div>
            <NavLink to="/" className={({isActive}) => isActive ? 'activo' : ''}>
                Inicio
            </NavLink>
            {user.role === 'ventas' && 
                <NavLink to="/ventas" className={({isActive}) => isActive ? 'activo' : ''}>
                    Ventas
                </NavLink>
            }
            {user.role === 'rrhh' &&
                <NavLink to="/recursos-humanos" className={({isActive}) => isActive ? 'activo' : ''}>
                    Recursos Humanos
                </NavLink>
            }
            <NavLink to="/soporte" className={({isActive}) => isActive ? 'activo' : ''}>
                Ayuda
            </NavLink>
        </div>
    </nav>
  )
}
