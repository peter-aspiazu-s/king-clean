import { BarraLlamada } from "./components/BarraLlamada"
import { ResumenLavadoMuebles } from "./components/ResumenLavadoMuebles"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"
import { TrabajosRealizados } from "./components/TrabajosRealizados"

export const LavadoMuebles = () => {
    return(
        <>
            <ResumenLavadoMuebles />
            <TrabajosRealizados />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
        </>
    )
}