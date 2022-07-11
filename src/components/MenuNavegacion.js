import { useState } from "react"
import { Link } from "react-router-dom";

export const MenuNavegacion = () => {

    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }
    
    const handleClickSubMenu = (e) => {
        e.preventDefault();
        setSubMenu(!subMenu);
    }

    return(
        <div className="menu-navegacion">
            <div className="menu-navegacion__logo animate__animated animate__bounceInLeft">
                <a href="#">King Clean</a>
            </div>
            <div className="menu-navegacion__menu animate__animated animate__bounceInLeft">
                <i 
                    onClick={handleMenu}
                    className="fa-solid fa-bars"
                ></i>
                <div className={
                        menu ? 'menu-navegacion__ul animate__animated animate__bounceInLeft'
                        : 'menu-navegacion__ul hidden-menu' 
                    }>
                    <Link 
                        to="/"
                        onClick={handleMenu}    
                    >Inicio</Link>
                    <Link 
                        to="nosotros"
                        onClick={handleMenu}
                    >Nosotros</Link>
                    <a 
                        href="#"
                        onClick={handleClickSubMenu}
                    >Servicios</a>
                    <div className={
                            subMenu ? 'submenu-visible animate__animated animate__backInLeft' : 'hidden-submenu'
                        }>
                        <a href="#" onClick={handleMenu}>Lavado de Muebles</a>
                        <a href="#" onClick={handleMenu}>Lavado de Colchones</a>
                        <a href="#" onClick={handleMenu}>Lavado de Vehiculos</a>
                        <a href="#" onClick={handleMenu}>Lavado de Alfombras</a>
                        <a href="#" onClick={handleMenu}>Lavado de Sillas</a>
                    </div>
                    <Link 
                        to="testimonios" 
                        onClick={handleMenu}
                    >Testimonios</Link>
                    <a href="#" onClick={handleMenu}>Contactos</a>
                </div>
            </div>
        </div>
    )
}