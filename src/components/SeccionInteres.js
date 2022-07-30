import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SeccionInteres = () => {

    let location = useLocation();
    const [pathName, setPathName] = useState()

    useEffect(() => {
        setPathName(location.pathname)
    }, [location])

    let navigate = useNavigate();

    const handleClickRedirec = (e) => {
        e.preventDefault()
        if(e.target.textContent === 'Ir a Nosotros'){
            navigate("/nosotros", { replace: true });
        }
        if(e.target.textContent === 'Ir a Testimonios'){
            navigate("/testimonios", { replace: true });
        }
        if(e.target.textContent === 'Ir a Contactos'){
            navigate("/contactos", { replace: true });
        }
    }

    return(
        <div className="seccion-interes">
            <h3 className="seccion-interes__title">Acceso Rápido</h3>
            <div className="seccion-interes__container">
            {
                (pathName !== '/nosotros') &&
                <div className="seccion-interes__interes">
                    <h3>Nosotros</h3>
                    <img src="./assets/img/nosotros.webp" />
                    <a 
                        href="#"
                        onClick={handleClickRedirec}
                    >Ir a Nosotros</a>
                </div>
            }
            {
                (pathName !== '/testimonios') &&
                <div className="seccion-interes__interes">
                    <h3>Testimonios</h3>
                    <img src="./assets/img/testimonios.webp" />
                    <a 
                        href="#"
                        onClick={handleClickRedirec}
                    >Ir a Testimonios</a>
                </div>
            }
            {
                (pathName !== '/contactos') &&
                <div className="seccion-interes__interes">
                    <h3>Contactos</h3>
                    <img src="./assets/img/contactos.webp" />
                    <a 
                        href="#"
                        onClick={handleClickRedirec}    
                    >Ir a Contactos</a>
                </div>
            }
                
            </div>
        </div>
    )
}