export const Home = () => {
    return (
        <div className="w-full flex flex-wrap justify-center" id="home">
            <h1 className="header1-home">TRANSFORMAMOS TUS</h1>
            <h1 className="header2-home">IDEAS EN REALIDAD</h1>
            <p>Especialistas en desarrollo de aplicaciones web y diseño gráfico profesional. Creamos experiencias digitales que impulsan tu marca.</p>
            
            <div className="btns">
            <button className="cssbuttons-io-button">
                <span>Iniciar proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>

            <button className="cssbuttons-io-button btn-2">
                <span>Ver proyectos</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
                </svg>
            </button>

            <div className="info">
                <div className="apartado-info">
                    <span></span>
                    <span></span>
                </div>

                <div className="apartado-info">
                    <span></span>
                    <span></span>
                </div>

                <div className="apartado-info">
                    <span></span>
                    <span></span>
                </div>
            </div>

            </div>
        </div>
    )
}