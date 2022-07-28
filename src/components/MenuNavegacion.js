import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const MenuNavegacion = () => {

    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    
    const handleMenu = () => {
        if(width < 800){
            setMenu(!menu);
        }
    }
    
    const handleClickSubMenu = () => {
        setSubMenu(!subMenu);
    }

    const cambiarTamaño = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', cambiarTamaño);

        return () => {
            window.removeEventListener('resize', cambiarTamaño);
        }
    })

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
                        to="king-clean/"
                        onClick={handleMenu}    
                    >Inicio</Link>
                    <Link 
                        to="king-clean/nosotros"
                        onClick={handleMenu}
                    >Nosotros</Link>
                    <a 
                        href="#"
                        onClick={handleClickSubMenu}
                    >Servicios</a>
                    <div className={
                            subMenu ? 'submenu-visible animate__animated animate__backInLeft' : 'hidden-submenu'
                        }>
                        <Link to="king-clean/lavado-muebles" onClick={handleClickSubMenu}>Lavado de Muebles</Link>
                        <Link to="king-clean/lavado-colchones" onClick={handleClickSubMenu}>Lavado de Colchones</Link>
                        <Link to="king-clean/lavado-vehiculos" onClick={handleClickSubMenu}>Lavado de Vehiculos</Link>
                        <Link to="king-clean/lavado-alfombras" onClick={handleClickSubMenu}>Lavado de Alfombras</Link>
                        <Link to="king-clean/lavado-sillas" onClick={handleClickSubMenu}>Lavado de Sillas</Link>
                    </div>
                    <Link 
                        to="king-clean/testimonios" 
                        onClick={handleMenu}
                    >Testimonios</Link>
                    <Link 
                        to="king-clean/contactos" 
                        onClick={handleMenu}
                    >Contactos</Link>
                </div>
            </div>
        </div>
    )
}