import { BrowserRouter, Route, Routes } from "react-router-dom"
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
        <BrowserRouter>
            <BarraSuperior />
            <MenuNavegacion />

            <Routes>
                <Route path="/king-clean/nosotros" element={<Nosotros />} />
                <Route path="/king-clean/testimonios" element={<Testimonios />} />
                <Route path="/king-clean/contactos" element={<Contactos />} />
                <Route path="/king-clean/lavado-muebles" element={<LavadoMuebles />} />
                <Route path="/king-clean/lavado-colchones" element={<LavadoColchones />} />
                <Route path="/king-clean/lavado-vehiculos" element={<LavadoVehiculos />} />
                <Route path="/king-clean/lavado-alfombras" element={<LavadoAlfombras />} />
                <Route path="/king-clean/lavado-sillas" element={<LavadoSillas />} />
                <Route exact path="/king-clean" element={<Inicio />} />
            </Routes>

            <BotonWhatsapp />
            <Footer />
        </BrowserRouter>
    )
}