import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getClientes } from './ClientesService';

export default function DashboardClientes() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        setClientes(getClientes());
    }, [clientes])

    return (
        <div className="container">
            <h1>Clientes</h1>
            <Link to="/ventas/crear-cliente">
                <button>Nuevo Cliente</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => {
                        return (
                            <tr key={cliente.cif}>
                                <td>{cliente.nombre}</td>
                                <td>
                                    <Link to={`/ventas/editar-cliente/${cliente.cif}`}>
                                        Visualizar
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
