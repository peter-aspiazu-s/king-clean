import { BarraLlamada } from "./components/BarraLlamada"
import { ResumenTestimonio } from "./components/ResumenTestimonio"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"
import { TrabajosRealizados } from "./components/TrabajosRealizados"

export const Testimonios = () => {
    return(
        <>
            <ResumenTestimonio />
            <TrabajosRealizados />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
        </>
    )
}