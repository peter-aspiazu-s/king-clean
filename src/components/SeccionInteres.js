import { useNavigate } from "react-router-dom";

export const SeccionInteres = () => {

    let navigate = useNavigate();

    const handleClickRedirec = (e) => {
        e.preventDefault()
        if(e.target.textContent === 'Ir a Nosotros'){
            navigate("/king-clean/nosotros", { replace: true });
        }
        if(e.target.textContent === 'Ir a Testimonios'){
            navigate("/king-clean/testimonios", { replace: true });
        }
        if(e.target.textContent === 'Ir a Contactos'){
            navigate("/king-clean/contactos", { replace: true });
        }
    }

    return(
        <div className="seccion-interes">
            <h3 className="seccion-interes__title">Acceso Rápido</h3>
            <div className="seccion-interes__container">
                <div className="seccion-interes__interes">
                    <h3>Nosotros</h3>
                    <img src="./assets/img/nosotros.webp" />
                    <a 
                        href="#"
                        onClick={handleClickRedirec}
                    >Ir a Nosotros</a>
                </div>
                <div className="seccion-interes__interes">
                    <h3>Testimonios</h3>
                    <img src="./assets/img/testimonios.webp" />
                    <a 
                        href="#"
                        onClick={handleClickRedirec}
                    >Ir a Testimonios</a>
                </div>
                <div className="seccion-interes__interes">
                    <h3>Contactos</h3>
                    <img src="./assets/img/contactos.webp" />
                    <a 
                        href="#"
                        onClick={handleClickRedirec}    
                    >Ir a Contactos</a>
                </div>
                
            </div>
        </div>
    )
}