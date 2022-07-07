import { useState } from "react"

export const MenuNavegacion = () => {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
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
                    <a href="#">Servicios</a>
                    <a href="#">Testimonios</a>
                    <a href="#">Contactos</a>
                </div>
            </div>
        </div>
    )
}