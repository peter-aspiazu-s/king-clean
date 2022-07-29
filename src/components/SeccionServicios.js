import { useNavigate } from "react-router-dom";

export const SeccionServicios = () => {

    let navigate = useNavigate();

    const handleClickRedirec = (e) => {
        e.preventDefault();

        if(e.target.dataset.servicios === 'muebles'){
            navigate("/king-clean/lavado-muebles", { replace: true });
        }
        if(e.target.dataset.servicios === 'colchones'){
            navigate("/king-clean/lavado-colchones", { replace: true });
        }
        if(e.target.dataset.servicios === 'vehiculos'){
            navigate("/king-clean/lavado-vehiculos", { replace: true });
        }
        if(e.target.dataset.servicios === 'alfombras'){
            navigate("/king-clean/lavado-alfombras", { replace: true });
        }
        if(e.target.dataset.servicios === 'sillas'){
            navigate("/king-clean/lavado-sillas", { replace: true });
        }
    }

    return(
        <div className="seccion-servicios">
            <h3 className="seccion-servicios__title">Acceso Rápido a Servicios</h3>
            <div className="seccion-servicios__container">
                <div className="seccion-servicios__servicio">
                    <h3>Lavado de Muebles</h3>
                    <img src="./assets/img/limpieza-muebles-img.webp" />
                    <a 
                        data-servicios="muebles"
                        onClick={handleClickRedirec}
                    >Ver Más</a>
                </div>
                <div className="seccion-servicios__servicio">
                    <h3>Lavado de Colchones</h3>
                    <img src="./assets/img/limpieza-colchones-img.webp" />
                    <a
                        data-servicios="colchones"
                        onClick={handleClickRedirec}
                    >Ver Más</a>
                </div>
                <div className="seccion-servicios__servicio">
                    <h3>Lavado de Vehículos</h3>
                    <img src="./assets/img/limpieza-vehiculos-img.webp" />
                    <a
                        data-servicios="vehiculos"
                        onClick={handleClickRedirec}
                    >Ver Más</a>
                </div>
                <div className="seccion-servicios__servicio">
                    <h3>Lavado de Alfombras</h3>
                    <img src="./assets/img/limpieza-alfombras-img.webp" />
                    <a
                        data-servicios="alfombras"
                        onClick={handleClickRedirec}
                    >Ver Más</a>
                </div>
                <div className="seccion-servicios__servicio">
                    <h3>Lavado de Sillas</h3>
                    <img src="./assets/img/limpieza-sillas-img.webp" />
                    <a
                        data-servicios="sillas"
                        onClick={handleClickRedirec}
                    >Ver Más</a>
                </div>
                
            </div>
        </div>
    )
}