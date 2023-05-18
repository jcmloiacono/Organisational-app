import './campoTexto.css'

const CampoTexto = (props) =>{
    const placeholderModificado = `${props.placeholder}...`;
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value) //ActualizarValor envia los datos a campoText
    }

    return <div className='campo-texto'>
        <label>{props.tittle}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            type="text"
            onChange={manejarCambio} 
            />
    </div>
}

export default CampoTexto;

  /* const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    } */