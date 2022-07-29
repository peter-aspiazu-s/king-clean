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
                <Link to="/" >King Clean</Link>
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
                    <div 
                        className="item-servicios"
                        onClick={handleClickSubMenu}
                    >Servicios</div>
                    <div className={
                            subMenu ? 'submenu-visible animate__animated animate__backInLeft' : 'hidden-submenu'
                        }>
                        <Link to="lavado-muebles" onClick={handleClickSubMenu}>Lavado de Muebles</Link>
                        <Link to="lavado-colchones" onClick={handleClickSubMenu}>Lavado de Colchones</Link>
                        <Link to="lavado-vehiculos" onClick={handleClickSubMenu}>Lavado de Vehiculos</Link>
                        <Link to="lavado-alfombras" onClick={handleClickSubMenu}>Lavado de Alfombras</Link>
                        <Link to="lavado-sillas" onClick={handleClickSubMenu}>Lavado de Sillas</Link>
                    </div>
                    <Link 
                        to="testimonios" 
                        onClick={handleMenu}
                    >Testimonios</Link>
                    <Link 
                        to="contactos" 
                        onClick={handleMenu}
                    >Contactos</Link>
                </div>
            </div>
        </div>
    )
}