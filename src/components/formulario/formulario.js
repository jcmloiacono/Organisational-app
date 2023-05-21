import { useState } from 'react';
import './formulario.css' 
import Campo from '../campo/campo';
import ListaOpciones from '../listaOpciones/listaOpciones';
import Boton from '../boton/boton';

const Formulario = (props) => {
    // Datos Colaborador
    const [nombre, actualizarNombre] = useState ("");
    const [puesto, actualizarPuesto] = useState ("");
    const [foto, actualizarFoto] = useState ("");
    const [equipo, actualizarEquipo] = useState ("");

    // Datos del Equipo
    const [titulo, actualizarTitulo] = useState ("")
    const [color, actualizarColor] = useState ("")

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (event) =>{
        event.preventDefault(); 
        console.log('Formulario enviado');
        const datosAEnviar = {
            nombre: nombre,
            puesto: puesto, 
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }


    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        crearEquipo({titulo, colorPrimario:color})
    }



    return <section className='formulario'>
        {/* Form Crear Colaborador */}
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                tittle='Nombre' 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor = {actualizarNombre}/>
            <Campo 
                tittle='Puesto' 
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor = {actualizarPuesto}/>
            <Campo 
                tittle='foto' 
                placeholder="Ingresar enlace de foto" 
                required={false}
                valor={foto}
                actualizarValor={actualizarFoto}/>
            <ListaOpciones 
                valor = {equipo} 
                actualizarEquipo = {actualizarEquipo}
                equipos = {props.equipos}
                />
                {/* Otro modo de utilizar el componente con children --> Boton */}
            <Boton>
                Crear Colaborador
                {/* <img src='/favicon.png' alt='favicon'/ > */}
            </Boton>
        </form>
        
        {/* Form Crear equipo */}
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                tittle='Titulo' 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor = {actualizarTitulo}/>
            <Campo 
                tittle='Color' 
                type='color'
                placeholder="Ingresar el Color en Hexadecimal"
                required
                valor={color}
                actualizarValor = {actualizarColor}/>
                
            <Boton>
                Crear Equipo
                {/* <img src='/favicon.png' alt='favicon'/ > */}
            </Boton>
        </form>
        </section>
}

export default Formulario;
