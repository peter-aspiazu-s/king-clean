import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "../Inicio"
import { BarraSuperior } from "../components/BarraSuperior"
import { Footer } from "../components/Footer"
import { MenuNavegacion } from "../components/MenuNavegacion"
import { Nosotros } from "../Nosotros"
import { Testimonios } from "../Testimonios"
import { BotonWhatsapp } from "../components/BotonWhatsapp"
import { Contactos } from "../Contactos"
import { LavadoMuebles } from "../LavadoMuebles"
import { LavadoColchones } from "../LavadoColchones"
import { LavadoVehiculos } from "../LavadoVehiculos"
import { LavadoAlfombras } from "../LavadoAlfombras"
import { LavadoSillas } from "../LavadoSillas"

export const AppRouter = () => {
    return(
        <HashRouter>
        {/* <BrowserRouter> */}
            <BarraSuperior />
            <MenuNavegacion />

            <Routes>
                <Route path="nosotros" element={<Nosotros />} />
                <Route path="testimonios" element={<Testimonios />} />
                <Route path="contactos" element={<Contactos />} />
                <Route path="lavado-muebles" element={<LavadoMuebles />} />
                <Route path="lavado-colchones" element={<LavadoColchones />} />
                <Route path="lavado-vehiculos" element={<LavadoVehiculos />} />
                <Route path="lavado-alfombras" element={<LavadoAlfombras />} />
                <Route path="lavado-sillas" element={<LavadoSillas />} />
                <Route exact path="/" element={<Inicio />} />
            </Routes>

            <BotonWhatsapp />
            <Footer />
        {/* </BrowserRouter> */}
        </HashRouter>
    )
}