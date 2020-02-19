import React from 'react'
import './style.css'

function CaixaTexto(props){
    return(
        <div className="box_Input">
             <label>{props.label}</label>
             <input type={props.type} className="input" placeholder={props.placeholder} onChange={props.onChange}></input>
        </div>
    )
}

export default CaixaTexto