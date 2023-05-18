//import { useState } from 'react';
import './miOrg.css'

const MiOrg = (props) => {
    // Estado - hooks
    //Hook useState
    //const [nombreVariable, FuncionActializa] = userState(valorInicial)
    //const [nombre, actualizarNombre] = useState('Jean');
    //console.log(useState())

    /*
    const [mostrar, actualizarMostrar] = useState(true);

     const manejarClick = () =>{
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar);
    } */

    return <section className='orgSection'>
        <h3 className='title'>Mi Organzacion</h3>
        <img src='/img/add.png' alt='add mi org' onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;