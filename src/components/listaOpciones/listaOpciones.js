import './listaOpciones.css'

const ListaOpciones = (props) =>{
    const equipos = ['Programacion','FrontEnd', 'Data Science','DevOps','UX /Design', 'Movil', 'Ignovacion y Gestion']
    //Metodo Map -> arreglo.map((equipo, index)) =>{
    // return <option></option>    
    //}

    // Con Js se Puede eliminar el return eliminando las llaves y dejando la funcion de flecha directo a la respuesta
    
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value);    
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" desabled defaultValue="" hidden>Seleccionar Equipo</option>
                {equipos.map((equipo, index) => 
                    <option key={index} value={equipo}>{equipo}</option>
                )}
            </select>
    </div>
}

export default ListaOpciones;