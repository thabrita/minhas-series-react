import Header from "./components/Header";
import Bio from "./components/Bio";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header title="Minhas séries favoritas"/>
      <Bio />
      <Cards/>
      <Footer description="Feito com ♡ por Thaís Brito. E todos os direitos são reservados."/>
    </div>
  );
}

export default App;
