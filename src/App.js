import { useState } from 'react';
import './App.css';

import Header from './components/header/header';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/miOrg/miOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  // Operador ternario --> condicion ? seMuestra : NoSeMuestra
  // Cortocircuito podria ser asi: condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }
  return (
    <div>
      <Header />
      {/* {mostrarFormulario === true ? <Formulario /> : <></>}  */} {/* ternario */}
      {mostrarFormulario && <Formulario />} {/* Cortocircuito */}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
