import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormCliente from '../components/FormCliente';
import { getClienteBy_id, updateCliente } from './ClientesService';

export default function EditarCliente() {

    const params = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        nombre: '',
        actividades: '',
        direccion: '',
        localidad: '',
    });

    useEffect(() => {
        getClienteBy_id(params._id)
                .then(resp =>  {
                    const {nombre, actividades, direccion, localidad} = resp.data.cliente;
                    setCliente({nombre, actividades, direccion, localidad});
                })
                .catch(err => console.log(err));
    }, [params])

    const handleOnChange = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        updateCliente(params._id, cliente)
                .then(resp => {
                    navigate('/ventas/dashboard-clientes');
                })
                .catch(err => console.log(err))

    }

    return (
        <div className="container">
           <form onSubmit={handleOnSubmit}>
                <FormCliente cliente={cliente} handleOnChange={handleOnChange} />
                <div className="row end">
                    <Link to="/ventas/dashboard-clientes">
                        <button>Atrás</button>
                    </Link>
                    <button type="submit">Guardar cambios</button>
                </div>
           </form>
        </div>
    )
}
