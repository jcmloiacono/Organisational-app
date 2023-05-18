import { useState } from 'react';
import './formulario.css' 
import CampoTexto from '../campoTexto/campoTexto';
import ListaOpciones from '../listaOpciones/listaOpciones';
import Boton from '../boton/boton';

const Formulario = () => {

    const [nombre, actualizarNombre] = useState ("");
    const [puesto, actualizarPuesto] = useState ("");
    const [foto, actualizarFoto] = useState ("");
    const [equipo, actualizarEquipo] = useState ("");

    const manejarEnvio = (event) =>{
        event.preventDefault(); 
        console.log('Formulario enviado');
        const datosaEnviar = {
            nombre: nombre,
            puesto: puesto, 
            foto: foto,
            equipo: equipo
        }
        console.log(datosaEnviar);
    }
    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                tittle='Nombre' 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor = {actualizarNombre}/>
            <CampoTexto 
                tittle='Puesto' 
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor = {actualizarPuesto}/>
            <CampoTexto 
                tittle='foto' 
                placeholder="Ingresar enlace de foto" 
                required={false}
                valor={foto}
                actualizarValor={actualizarFoto}/>
            <ListaOpciones 
                valor = {equipo} 
                actualizarEquipo = {actualizarEquipo}/>
                {/* Otro modo de utilizar el componente con children --> Boton */}
            <Boton>
                Crear
                {/* <img src='/favicon.png' alt='favicon'/ > */}
            </Boton>
        </form>
        </section>
}

export default Formulario;
