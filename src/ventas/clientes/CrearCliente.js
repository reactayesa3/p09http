import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FormCliente from '../components/FormCliente';
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
                <FormCliente />
                <div className="row end">
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </div>
    )
}
