import './Habilidades.css'

const Habilidades = () => {
    return(
        <div class="Habilidades">
            <h1>Habilidades</h1>
            <div class="loader">
                <div class="main">
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
                        <label>HTML e CSS</label>
                        <div class="cem">
                            <div class="loading_1 vermelho"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades;