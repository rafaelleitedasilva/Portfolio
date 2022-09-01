import './Header.css'

const Header = () => {
    return(
        <div class="Header">
                <div class="Brand">
                    <p>R|A|F|A|E|L</p>
                </div>
                <div class="menu"> 
                    <a>Perfil</a> 
                    <a>Habilidades</a> 
                    <a>Experiência</a> 
                    <a>Contato</a>
                </div>
                <div class="menu2">
                    <a><img src="./Imagens/burger-menu.png" class="icone-menu" alt="burger"/></a>
                </div>
        </div>
    )
}

export default Header;