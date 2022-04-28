import React from 'react'

export default function FormCliente(props) {
  return (
    <>
        <div className="row">
            <div className="col-100">
                <label>Nombre</label>
                <input type="text" 
                       name="nombre"
                       readOnly={!props.isEditionMode}
                       value={props.cliente.nombre}
                       onChange={props.handleOnChange}/>
            </div>
        </div>
        <div className="row">
            <div className="col-100">
                <label>Actividades</label>
                <input type="text" 
                       name="actividades"
                       readOnly={!props.isEditionMode}
                       value={props.cliente.actividades}
                       onChange={props.handleOnChange}/>
            </div>
        </div>
        <div className="row">
            <div className="col-100">
                <label>Dirección</label>
                <input type="text" 
                       name="direccion"
                       readOnly={!props.isEditionMode}
                       value={props.cliente.direccion}
                       onChange={props.handleOnChange}/>
            </div>
        </div>
        <div className="row">
            <div className="col-100">
                <label>Localidad</label>
                <input type="text" 
                       name="localidad"
                       readOnly={!props.isEditionMode}
                       value={props.cliente.localidad}
                       onChange={props.handleOnChange}/>
            </div>
        </div>

    </>
  )
}
