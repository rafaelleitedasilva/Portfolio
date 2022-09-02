import './Habilidades.css'

const Habilidades = () => {
    return(
        <div class="Habilidades">
            <h1>Habilidades</h1>
            <div class="loader">
                
                <div class="main">
                <div class="tecnologias">
                    <p>GitHub</p><p>Next.js</p><p>Google Cloud</p><p>SQL Server</p><p>AWS</p>
                    <p>Selenium</p><p>Tkinter</p>
                </div>
                <div class="graficos">
                        <div class="React">
                            <label>React</label>
                            <div class="cem">
                                <div class="loading_1 verde"></div>
                            </div>
                        </div>
                        <div class="Python">
                            <label>Python</label>
                            <div class="cem">
                                <div class="loading_1 azul"></div>
                            </div>
                        </div>
                        <div class="Javascript">
                            <label>Javascript</label>
                            <div class="cem">
                                <div class="loading_1 amarelo"></div>
                            </div>
                        </div>
                        <div class="HtmlCss">
                            <label>HTML&CSS</label>
                            <div class="cem">
                                <div class="loading_1 vermelho"></div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades;