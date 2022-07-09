import { useState } from "react"

export const MenuNavegacion = () => {

    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    const handleClickSubMenu = () => {
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
                    <a href="#">Inicio</a>
                    <a href="#">Nosotros</a>
                    <a 
                        href="#"
                        onClick={handleClickSubMenu}
                    >Servicios</a>
                    <div className={
                            subMenu ? 'submenu-visible animate__animated animate__backInLeft' : 'hidden-submenu'
                        }>
                        <a href="#">Lavado de Muebles</a>
                        <a href="#">Lavado de Colchones</a>
                        <a href="#">Lavado de Vehiculos</a>
                        <a href="#">Lavado de Alfombras</a>
                        <a href="#">Lavado de Sillas</a>
                    </div>
                    <a href="#">Testimonios</a>
                    <a href="#">Contactos</a>
                </div>
            </div>
        </div>
    )
}