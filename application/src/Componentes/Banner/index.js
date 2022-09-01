import './Banner.css'

let aux = "Banner"
let date = new Date()
let trab = date.getFullYear() - 2019

if(trab <= 1){
    trab = `${trab} ano`
}else{
    trab = `${trab} anos`
}

setTimeout(()=>{
    aux= "Banner hide"
}, 1000)

const Banner = () => {
    return(
        <div class={aux}>
                <img src="./Imagens/Avatar2.png" alt="Imagem do Banner" class="Imagem"/>
                <div class="perfil">
                    <div class="Paragrafos">
                        <h1>UM POUCO SOBRE MIM...</h1>
                        <p>Meu nome é Rafael Leite da Silva, tenho {date.getFullYear() - 2003} anos.</p>
                        <p>Entrei nesse mundo em 2019 com aulas online de Python, depois de um tempo passei a me interessar em programação frontend, passei a fazer alguns modelos de sites e hoje em dia foco em aprender React e Automações com Selenium em Python, em {date.getFullYear()} completarei {trab} anos estudando e trabalhando com programação. </p>
                    </div>
                </div>
        </div>
    )
}

export default Banner;