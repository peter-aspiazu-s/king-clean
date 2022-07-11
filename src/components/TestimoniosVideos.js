export const TestimoniosVideos = () => {
    return(
        <div className="testimonios-videos">
            <h3>Testimonios de Clientes Satisfechos</h3>
            <div className="testimonios-videos__container">
                <div className="testimonios-videos__video">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/DA2LGIhzqb4" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                </div>
                <div className="testimonios-videos__video">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/ktfA4I3BsOI" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}