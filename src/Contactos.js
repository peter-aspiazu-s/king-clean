import { BarraLlamada } from "./components/BarraLlamada"
import { InformacionContactos } from "./components/InformacionContactos"
import { ResumenContactos } from "./components/ResumenContactos"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"

export const Contactos = () => {
    return(
        <>
            <ResumenContactos />
            <InformacionContactos />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
        </>
    )
}