import { Link } from "react-router-dom";

export const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__logo-texto">
                <div className="footer__logo">
                    <span>King Clean</span>
                </div>
                <div className="footer__texto">
                    <p>Limpieza profunda de casas, muebles, colchones, vehículos, alfombras y sillas de comedor en Guayaquil y Durán. Somos especialistas en limpieza. Brindamos un servicio de calidad.</p>
                </div>
            </div>
            <div className="footer__redes-direccion">
                <h3>Dirección:</h3>
                <p>Guayaquil & Durán</p>
                <a href="tel:+593989411325">0989411325</a>
                <div className="footer__redes">
                    <a href="https://www.instagram.com/king_clean20/?igshid=YmMyMTA2M2Y%3D" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://wa.link/mtepd5" target="_blank">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100063281676296" target="_blank">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="tel:+593989411325">
                        <i className="fa-solid fa-phone"></i>
                    </a>
                </div>
            </div>
            <div className="footer__secciones">
                <ul>
                    <h2>MENU</h2>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="nosotros">Nosotros</Link></li>
                    {/* <li><a href="#">Servicios</a></li> */}
                    <li><Link to="testimonios">Testimonios</Link></li>
                    <li><a href="#">Contactos</a></li>
                </ul>
            </div>
            <div className="footer__desarrollador">
                <p>Sitio Web Diseñado y Desarrollado por <a href="https://peter-aspiazu-s.github.io/desarrollo_web/" target="_blank">Peter Aspiazu S.</a></p>
            </div>
        </div>
    )
}