import { BarraLlamada } from "./components/BarraLlamada"
import { BotonWhatsapp } from "./components/BotonWhatsapp"
import { Miembros } from "./components/Miembros"
import { ResumenEmpresa } from "./components/ResumenEmpresa"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"

export const Nosotros = () => {
    return(
        <>
            <ResumenEmpresa />
            <Miembros />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
            {/* <Footer /> */}
            <BotonWhatsapp />
        </>
    )
}