import { BarraLlamada } from "./components/BarraLlamada"
import { ResumenLavadoColchones } from "./components/ResumenLavadoColchones"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"
import { TrabajosRealizados } from "./components/TrabajosRealizados"

export const LavadoColchones = () => {
    return(
        <>
            <ResumenLavadoColchones />
            <TrabajosRealizados />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
        </>
    )
}