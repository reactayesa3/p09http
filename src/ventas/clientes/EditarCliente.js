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
    const [isEditionMode, setIsEditionMode] = useState(false);

    useEffect(() => {
        getClienteBy_id(params._id)
                .then(resp =>  {
                    const {nombre, actividades, direccion, localidad} = resp.data.cliente;
                    setCliente({nombre, actividades, direccion, localidad});
                })
                .catch(err => console.log(err));
    }, [params])

    const handleIsEditionMode = e => {
        e.preventDefault();
        setIsEditionMode(!isEditionMode);
    }

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
                    console.log(resp.data);
                    navigate('/ventas/dashboard-clientes');
                })
                .catch(err => console.log(err))

    }

    return (
        <div className="container">
           <form onSubmit={handleOnSubmit}>
                <FormCliente cliente={cliente} handleOnChange={handleOnChange} isEditionMode={isEditionMode}/>
                <div className="row end">
                    {isEditionMode ?
                        <>
                            <button className='outline' type="button" onClick={handleIsEditionMode}>Cancelar</button>
                            <button type="submit">Guardar cambios</button>
                        </>
                        :
                        <>
                            <Link to="/ventas/dashboard-clientes">
                                <button className='outline' type="button">Atrás</button>
                            </Link>
                            <button type="button" onClick={handleIsEditionMode}>Editar</button>
                        </>
                    }
                    
                </div>
           </form>
        </div>
    )
}
