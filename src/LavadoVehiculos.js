import { BarraLlamada } from "./components/BarraLlamada"
import { ResumenLavadoVehiculos } from "./components/ResumenLavadoVehiculos"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"
import { TrabajosRealizados } from "./components/TrabajosRealizados"

export const LavadoVehiculos = () => {
    return(
        <>
            <ResumenLavadoVehiculos />
            <TrabajosRealizados />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
        </>
    )
}