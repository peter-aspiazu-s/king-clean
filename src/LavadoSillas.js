import { BarraLlamada } from "./components/BarraLlamada"
import { ResumenLavadoSillas } from "./components/ResumenLavadoSillas"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"
import { TrabajosRealizados } from "./components/TrabajosRealizados"

export const LavadoSillas = () => {
    return(
        <>
            <ResumenLavadoSillas />
            <TrabajosRealizados />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
        </>
    )
}