import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeHolderModificada = `${props.placeholder}...`

    const onDigit = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={onDigit} required={props.obrigatorio} placeholder={placeHolderModificada}/>
        </div>
    )

}

export default CampoTexto