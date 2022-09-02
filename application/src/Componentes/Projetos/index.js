import './Projetos.css';

const projetos = ['Intranet','Alumbra','PurplePaper','']

const Projetos = () => {
    return(
        <div class="Projetos">
            {projetos.map(()=>{
                <div></div>
            })}
        </div>
    )
}

export default Projetos;