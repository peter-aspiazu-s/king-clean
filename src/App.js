import { BarraLlamada } from "./components/BarraLlamada"
import { BarraSuperior } from "./components/BarraSuperior"
import { Footer } from "./components/Footer"
import { MenuNavegacion } from "./components/MenuNavegacion"
import { SlideServicios } from "./components/SlideServicios"

export const App = () => {
    return(
        <>
            <BarraSuperior />
            <MenuNavegacion />
            <SlideServicios />
            <BarraLlamada />
            <Footer />
        </>
    )
}