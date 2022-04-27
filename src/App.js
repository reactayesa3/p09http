import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ProtectVentasRoute from "./guards/ProtectVentasRoute";
import Inicio from "./pages/Inicio";
import Soporte from "./pages/Soporte";

const InicioVentas = React.lazy(() => import('./ventas/InicioVentas'));
const InicioRRHH = React.lazy(() => import('./rrhh/InicioRRRHH'));

function App() {

  const comp404 = <div className="container">
    <p>Lo sentimos, la página no existe</p>
    <Link to="/" >
      <button>Volver a inicio</button>
    </Link>
  </div>

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/ventas/*" element={
          <ProtectVentasRoute>
            <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
              <InicioVentas />
            </React.Suspense>
          </ProtectVentasRoute>
        } />
        <Route path="/recursos-humanos/*" element={
          <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
            <InicioRRHH />
          </React.Suspense>
        } />
        <Route path="/soporte" element={<Soporte />}/>
        <Route path="*" element={comp404} /> {/* La ruta "sumidero" deberá ser siempre la última */}
      </Routes>
    </>
  );
}

export default App;