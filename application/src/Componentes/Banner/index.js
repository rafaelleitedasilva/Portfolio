import './Banner.css'

let aux = "Banner"
let date = new Date()
let trab = date.getFullYear() - 2021

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
                        <h1>PERFIL</h1>
                        <p>Meu nome é Rafael Leite da Silva, tenho {date.getFullYear() - 2003} anos.</p>
                        <p>Programo principalmente em Javascript e Python e trabalho com programação há mais de {trab}.</p>
                        <p>Meu sonho é me tornar um desenvolvedor Fullstack.</p>
                    </div>
                </div>
        </div>
    )
}

export default Banner;