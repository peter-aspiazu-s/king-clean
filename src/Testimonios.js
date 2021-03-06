import { BarraLlamada } from "./components/BarraLlamada"
import { ResumenTestimonio } from "./components/ResumenTestimonio"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"
import { TestimoniosVideos } from "./components/TestimoniosVideos"
import { TrabajosRealizados } from "./components/TrabajosRealizados"

export const Testimonios = () => {
    return(
        <>
            <ResumenTestimonio />
            <TestimoniosVideos />
            <TrabajosRealizados />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
        </>
    )
}