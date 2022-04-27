import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addCliente } from './ClientesService'

export default function CrearCliente() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        nombre: '',
        cif: '',
        localidad: ''
    })

    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        addCliente(values);
        navigate('/ventas/dashboard-clientes'); // Navegación programática
    }

    return (
        <div className="container">
            <h1>Nuevo cliente</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="row">
                    <div className="col-100">
                        <label>Nombre</label>
                        <input type="text" 
                               name="nombre"
                               value={values.nombre}
                               onChange={handleOnChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-100">
                        <label>CIF</label>
                        <input type="text" 
                               name="cif"
                               value={values.cif}
                               onChange={handleOnChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-100">
                        <label>Localidad</label>
                        <input type="text" 
                               name="localidad"
                               value={values.localidad}
                               onChange={handleOnChange}/>
                    </div>
                </div>
                <div className="row end">
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </div>
    )
}
