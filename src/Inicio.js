import { BarraLlamada } from "./components/BarraLlamada"
import { BarraSuperior } from "./components/BarraSuperior"
import { BotonWhatsapp } from "./components/BotonWhatsapp"
import { Footer } from "./components/Footer"
import { MenuNavegacion } from "./components/MenuNavegacion"
import { SeccionInteres } from "./components/SeccionInteres"
import { SeccionServicios } from "./components/SeccionServicios"
import { SlideServicios } from "./components/SlideServicios"

export const Inicio = () => {
    return(
        <>
            {/* <BarraSuperior />
            <MenuNavegacion /> */}
            <SlideServicios />
            <BarraLlamada />
            <SeccionServicios />
            <BarraLlamada />
            <SeccionInteres />
            {/* <Footer /> */}
            <BotonWhatsapp />
        </>
    )
}