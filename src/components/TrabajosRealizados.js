import { useState } from "react"
import { testimonios } from "../data/testimonios"
import { Paginacion } from "./Paginacion";

export const TrabajosRealizados = () => {

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(3);

    const maximo = testimonios.length / porPagina;

    return(
        <div className="trabajos-realizados">
            <h3>Trabajos Realizados</h3>
            {
                testimonios.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
                .map((testimonio, i) => (
                    <div key={i} className="trabajos-realizados__contenedor">
                        <div className="trabajos-realizados__contenedor-img">
                            <img src={testimonio.img} />
                        </div>
                        <p>{testimonio.name}</p>
                    </div>
                ))
            }
            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
    )
}