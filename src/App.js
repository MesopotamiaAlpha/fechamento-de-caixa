import './css/App.css';
import './components/blocoValores/valores'
import Blocovalores from './components/blocoValores/valores';
import BarraCima from './components/barraCima/BarraCima';
import BarraLateral from './components/barraLateral/barraLateral';

function App(props) {
  return (
    <div className="App">
      <Blocovalores className="blocoValores" />
      <BarraCima className="barraCima" />
      <BarraLateral className="barraLateral" />

    </div>
  );
}

export default App;
