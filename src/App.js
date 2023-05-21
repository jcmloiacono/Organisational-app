import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './App.css';

import Header from './components/header/header';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/miOrg/miOrg';
import Equipo from './components/equipo/equipo';
import Footer from './components/footer/footer';

 // Lista de Ejemplo de colaboradores
 // Agregar Lista de equipos por defecto y eliminar la lista de usuarios desde el state con el json
  const colaboradoresEjemplo = [
    {
    equipo: "Front End", 
    foto: "http://github.com/jcmloiacono.png", 
    nombre: "Juan C. Martinez",
    puesto: "Instructor"
    }, 
    {
    equipo: "DevOps", 
    foto: "http://github.com/g.png", 
    nombre: "Github G",
    puesto: "Consultor"
    }
]

  // Lista de equipos TODO ppnerla como un objeto para utilizarla en los useState
  
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "FrontEnd", 
      foto: "http://github.com/jcmloiacono.png", 
      nombre: "Juan C. Martinez",
      puesto: "Instructor",
      fav: true
    },  
    {
      id: uuid(),
      equipo: "DevOps", 
      foto: "http://github.com/g.png", 
      nombre: "Github G",
      puesto: "Consultor",
      fav: false
    }
  ])
  const[equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programacion',
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: 'FrontEnd',
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: 'DevOps',
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: 'UX /Design',
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: 'Movil',
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: 'Ignovacion y Gestion',
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }   
    ])
  
  // Operador ternario --> condicion ? seMuestra : NoSeMuestra
  // Cortocircuito podria ser asi: condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador ", colaborador)
    //Spread Operator 
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador 
  const eliminarColaborador = (id) =>{
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color Equipo
  const actualizarColor = (color, id) =>{
    console.log("Actualizar Color: ", color, id )
    const equiposActualizados = equipos.map((equipos) =>{
      if(equipos.id === id){
        equipos.colorPrimario = color
      }
      return equipos
    })
    actualizarEquipos(equiposActualizados)
  }
  
  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid()}])
  }

  // Activar/Desactivar Like
  const like = (id) => {
    console.log("Like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div>
      <Header />
      {/* {mostrarFormulario === true ? <Formulario /> : <></>}  */} {/* ternario */}
      {mostrarFormulario && <Formulario 
        equipos={equipos.map( ( equipo ) => equipo.titulo) }
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
        />} {/* Cortocircuito */}


      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}  
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like = {like}
        />
        )
      }
    <Footer/>
    </div>
  );

}

export default App;
