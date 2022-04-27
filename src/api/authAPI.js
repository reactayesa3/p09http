// Mock o simulación de petición a un servicio de autenticación

export function getUser(fakeAuthData) {
    // lógica de petición y respuesta con esos fakeAuthData
    // Con el timer simulamos la asíncronia de la petición
    return new Promise(resolve => setTimeout(() => resolve({user: {name: 'Juan', role: 'ventas'}}), 2000))
}