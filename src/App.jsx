import './styles/global.css';
import Header from './components/Header/Header.jsx';
import Perfil from './components/Perfil/Perfil.jsx';
import Trabalhos from './components/Trabalhos/Trabalhos.jsx';
import Atendimentos from './components/Atendimento/Atendimentos.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="perfil"><Perfil /></section>
        <section id="trabalhos"><Trabalhos /></section>
        <section id="atendimentos"><Atendimentos /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;

// Falta:
// Ajeitar imagens dos chaveiros
// Colocar todas as imagens em outro arquivo
// Mudar logo