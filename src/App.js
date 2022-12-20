import './css/App.css';
import './components/blocoValores/valores'
import Blocovalores from './components/blocoValores/valores';
import BarraCima from './components/barraCima/BarraCima';

function App(props) {
  return (
    <div className="App">
      <Blocovalores className="blocoValores" />
      <BarraCima className="barraCima" />

    </div>
  );
}

export default App;
