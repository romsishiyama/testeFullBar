import React from 'react'
import './style.css'

function Btn(props){
    return(
        <button className="btn" onClick={props.onClick}>{props.children}</button>
                    
    )
}

export default Btn