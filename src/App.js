import { TextField,Button } from "@mui/material";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <TextField className="campoTexto" id="filled-basic" label="Nota 100" variant="filled" />
      <TextField className="campoTexto" id="filled-basic" label="Nota 50" variant="filled" />
      <TextField className="campoTexto" id="filled-basic" label="Nota 20" variant="filled" />
      <TextField className="campoTexto" id="filled-basic" label="Nota 10" variant="filled" />
      <TextField className="campoTexto" id="filled-basic" label="Nota 5" variant="filled" />
      <TextField className="campoTexto" id="filled-basic" label="Moeda 1,00" variant="filled" />
      <TextField className="campoTexto" id="filled-basic" label="Moeda 0,50" variant="filled" />
      <TextField className="campoTexto" id="filled-basic" label="Moeda 0,25" variant="filled" />
      <TextField className="campoTexto" id="filled-basic" label="Moeda 0,10" variant="filled" />
      <TextField className="campoTexto" id="filled-basic" label="Moeda 0,05" variant="filled" />

      <Button variant="contained">Somar</Button>

    </div>
  );
}

export default App;
