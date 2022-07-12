import { BarraLlamada } from "./components/BarraLlamada"
import { ResumenLavadoAlfombras } from "./components/ResumenLavadoAlfombras"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"
import { TrabajosRealizados } from "./components/TrabajosRealizados"

export const LavadoAlfombras = () => {
    return(
        <>
            <ResumenLavadoAlfombras />
            <TrabajosRealizados />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
        </>
    )
}