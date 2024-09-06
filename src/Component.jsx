import React, {useState} from 'react'



function Component() {

    const [text,setText] = useState()

    
    const textOnChange = (event) => {
        setText(event.target.value)
    };
    const [updated,setUpdated] = useState()
    
    const buttonOnClick = (event) => {
        setUpdated(text)
    };

    

    return (
        <div>
            <input type="text" value={text} onChange={textOnChange} />
            <button onClick={buttonOnClick}>Actualizar</button>
            <p>Texto Inicial: {text}</p>
            <p>Texto Actualizado: {updated}</p>
        </div>
       
        
    )
}

export default Component
 