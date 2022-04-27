import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getClienteByCif } from './ClientesService';

export default function EditarCliente() {

    const params = useParams();
    const [cliente, setCliente] = useState({});

    useEffect(() => {
        setCliente(getClienteByCif(params.cif))
    }, [params])

    return (
        <div className="container">
            <h1>Detalle de cliente</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{cliente.nombre}</td>
                    </tr>
                    <tr>
                        <th>CIF</th>
                        <td>{cliente.cif}</td>
                    </tr>
                    <tr>
                        <th>Localidad</th>
                        <td>{cliente.localidad}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row end">
                <Link to="/ventas/dashboard-clientes">
                    <button>Atrás</button>
                </Link>
            </div>
        </div>
    )
}
