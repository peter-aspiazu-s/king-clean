import { useState } from "react";

export const Paginacion = ({pagina, setPagina, maximo}) => {

    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPagina(pagina + 1);
    }
    
    const previousPage = () => {
        setInput(parseInt(input) - 1);
        setPagina(pagina - 1);
    }

    const onKeyDown = (e) => {
        if(e.keyCode == 13){
            setPagina(parseInt(e.target.value))

            if(
                parseInt(e.target.value < 1) ||
                parseInt(e.target.value) > Math.ceil(maximo) || 
                isNaN(parseInt(e.target.value))
            ){
                setPagina(1);
                setInput(1);
            } else {
                setPagina(parseInt(e.target.value));
            }
        }
    }

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return(
        <div className="paginacion">
            <button
                disabled={pagina === 1 || pagina < 1}
                onClick={previousPage}
            >
                <i className="fa-solid fa-circle-arrow-left"></i>
            </button>
            <input 
                name="page" 
                autoComplete="off" 
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <p>de {Math.ceil(maximo)}</p>
            <button
                disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
                onClick={nextPage}
            >
                <i className="fa-solid fa-circle-arrow-right"></i>
            </button>
        </div>
    )
}