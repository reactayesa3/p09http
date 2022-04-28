import axios from 'axios';

let clientes = []

const clientesEndPoint = 'http://localhost:8080/clientes/';

export function getClientes() {
    return axios.get(clientesEndPoint);
}

export function searchClientes(term) {
    return axios.get(clientesEndPoint + 'search/' + term);
}

export function getClienteByCif(cif) {
    return clientes.filter(cliente => cliente.cif === cif)[0];
}

export function addCliente(cliente) {
    return axios.post(clientesEndPoint, cliente);
}