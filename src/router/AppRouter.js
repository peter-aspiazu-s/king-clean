import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "../Inicio"
import { BarraSuperior } from "../components/BarraSuperior"
import { Footer } from "../components/Footer"
import { MenuNavegacion } from "../components/MenuNavegacion"
import { Nosotros } from "../Nosotros"
import { Testimonios } from "../Testimonios"
import { BotonWhatsapp } from "../components/BotonWhatsapp"
import { Contactos } from "../Contactos"

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <BarraSuperior />
            <MenuNavegacion />

            <Routes>
                <Route path="/king-clean/" element={<Inicio />} />
                <Route path="/king-clean/nosotros" element={<Nosotros />} />
                <Route path="/king-clean/testimonios" element={<Testimonios />} />
                <Route path="/king-clean/contactos" element={<Contactos />} />
            </Routes>

            <BotonWhatsapp />
            <Footer />
        </BrowserRouter>
    )
}