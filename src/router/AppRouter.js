import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "../Inicio"
import { BarraSuperior } from "../components/BarraSuperior"
import { Footer } from "../components/Footer"
import { MenuNavegacion } from "../components/MenuNavegacion"
import { Nosotros } from "../Nosotros"
import { Testimonios } from "../Testimonios"
import { BotonWhatsapp } from "../components/BotonWhatsapp"

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <BarraSuperior />
            <MenuNavegacion />

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/testimonios" element={<Testimonios />} />
            </Routes>

            <BotonWhatsapp />
            <Footer />
        </BrowserRouter>
    )
}