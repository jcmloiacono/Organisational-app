import './campo.css'

const Campo = (props) =>{
    const placeholderModificado = `${props.placeholder}...`;
    
    //Destructuracion para type y poner definir un valor por defecto en caso de no mandarlo
    const { type = 'text' } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value) //ActualizarValor envia los datos a campoText
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.tittle}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            type={type}
            onChange={manejarCambio} 
            />
    </div>
}

export default Campo;

  /* const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    } */