import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FormCliente from '../components/FormCliente';
import { addCliente } from './ClientesService'

export default function CrearCliente() {

    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        nombre: '',
        actividades: '',
        direccion: '',
        localidad: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        addCliente(cliente)
            .then(resp => {
                // Lógica con la respuesta
                setIsLoading(false);
                navigate('/ventas/dashboard-clientes'); // Navegación programática
            })
            .catch(err => {
                // Lógica con mensaje toast
                setIsLoading(false);
                console.log(err);
            })
        
    }

    return (
        <div className="container">
            <h1>Nuevo cliente</h1>
            <form onSubmit={handleOnSubmit}>
                <FormCliente cliente={cliente} handleOnChange={handleOnChange} isEditionMode={true}/>
                <div className="row end">
                    {isLoading ? <button disabled>Espere...</button>: <button type="submit">Añadir</button>}
                </div>
            </form>
        </div>
    )
}
