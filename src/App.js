import './css/App.css';
import './components/blocoValores/valores'
import Blocovalores from './components/blocoValores/valores';
import BarraCima from './components/barraCima/BarraCima';
import BarraLateral from './components/barraLateral/barraLateral';
import BarraInferior from './components/barraInferior/BarraInferior'

function App(props) {
  return (
    <div className="App">
      <Blocovalores className="blocoValores" />
      <BarraCima className="barraCima" />
      <BarraLateral className="barraLateral" />
      <BarraInferior />

    </div>
  );
}

export default App;
