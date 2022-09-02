import './App.css';
import Header from './Componentes/Header'
import Banner from './Componentes/Banner'
import Habilidades from './Componentes/Habilidades'
import Projetos from './Componentes/Projetos'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Habilidades></Habilidades>
        <Projetos></Projetos>
    </div>
  );
}

export default App;
