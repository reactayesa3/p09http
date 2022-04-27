import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import CrearCliente from './clientes/CrearCliente'
import DashboardClientes from './clientes/DashboardClientes'
import EditarCliente from './clientes/EditarCliente'

export default function InicioVentas() {
  return (

    <Routes path="/" element={<Outlet />}> {/* "basepath" que corresponde a "/ventas/*"*/}
        <Route index element={<InicioVentasLayout />}/>
        <Route path="dashboard-clientes" element={<DashboardClientes />} />
        <Route path="crear-cliente" element={<CrearCliente />} />
        <Route path="editar-cliente/:cif" element={<EditarCliente />}/>
     </Routes>
  )
}

function InicioVentasLayout() {
    return (
        <div className="container">
            <h1>Ventas</h1>
            <Link to="/ventas/dashboard-clientes"> {/*absoluta o relativa*/}
                <button>Clientes</button>
            </Link>
        </div>
    )
}