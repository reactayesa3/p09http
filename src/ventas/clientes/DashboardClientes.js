import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useDebounce from '../../hooks/useDebounce';
import { getClientes, searchClientes } from './ClientesService';

export default function DashboardClientes() {

    const [clientes, setClientes] = useState([]);
    const [term, setTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {debounceValue} = useDebounce(term, 500);

    // useEffect(() => {
    //     const getClientesRespose = async () => {
    //         try {
    //             const response = await getClientes(); // Ansíncrona
    //             setClientes(response.data.clientes); // Sincrona
    //         } catch(err) {
    //             // Lógica del error (toast)
    //             console.log(err)
    //         }
    //     }
    //     getClientesRespose();

    //     // getClientes()
    //     //     .then(resp => {
    //     //         // lógica
    //     //         setClientes(resp.data.clientes);
    //     //     })
    //     //     .catch(err => {
    //     //         // lógica del error (toast)
    //     //         console.log(err);
    //     //     })
    // }, [clientes])


    const handleOnChange = e => {
        setTerm(e.target.value);
    }

    useEffect(() => {
        if(debounceValue.length > 0) {
            setIsLoading(true);
            searchClientes(term)
                .then(resp => {
                    setClientes(resp.data.clientes);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                })
        } else {
            setClientes([])
        }
    }, [debounceValue])

    return (
        <div className="container">
            <h1>Clientes</h1>
            <Link to="/ventas/crear-cliente">
                <button>Nuevo Cliente</button>
            </Link>
            <form>
                <input type="search" 
                       value={term}
                       onChange={handleOnChange}/>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? 
                        <tr><td colSpan={2} style={{textAlign: 'center'}}>Cargando...</td></tr>
                        :
                        clientes.map(cliente => {
                            return (
                                <tr key={cliente._id}>
                                    <td>{cliente.nombre}</td>
                                    <td>
                                        <Link to={`/ventas/editar-cliente/${cliente._id}`}>
                                            Visualizar
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
