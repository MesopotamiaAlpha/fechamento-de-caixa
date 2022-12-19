import React from "react";
import { TextField,Button } from "@mui/material";
import './valores.css';

const Blocovalores = () => {
    
    
    //este processo a baixo pega todos os valores enviados no input, o evento pega ele baseador no target.value
    let valor = null;
    const aoDigitado = (evento) =>{
        valor = evento.target.value;
        console.log(valor);
    }

    return (
        <>
        <div className="bloco">
            <h1 className="titulo">Digite a quantidade de notas no caixa</h1>

            <form >
                <TextField className="campoTexto" id="filled-basic" label="Nota 200" variant="filled" type="number"  sx={{ mb: 2 }} onChange={aoDigitado}/>
                <TextField className="campoTexto" id="filled-basic" label="Nota 100" variant="filled" type="number"  sx={{ mb: 2 }} />
                <TextField className="campoTexto" id="filled-basic" label="Nota 50" variant="filled" type="number" sx={{ mb: 2 }}/>
                <TextField className="campoTexto" id="filled-basic" label="Nota 20" variant="filled" type="number" sx={{ mb: 2 }}/>
                <TextField className="campoTexto" id="filled-basic" label="Nota 10" variant="filled" type="number" sx={{ mb: 2 }}/>
                <TextField className="campoTexto" id="filled-basic" label="Nota 5" variant="filled" type="number" sx={{ mb: 2 }}/>
                <TextField className="campoTexto" id="filled-basic" label="Moeda 1,00" variant="filled" type="number" sx={{ mb: 2 }}/>
                <TextField className="campoTexto" id="filled-basic" label="Moeda 0,50" variant="filled" type="number" sx={{ mb: 2 }}/>
                <TextField className="campoTexto" id="filled-basic" label="Moeda 0,25" variant="filled" type="number" sx={{ mb: 2 }}/>
                <TextField className="campoTexto" id="filled-basic" label="Moeda 0,10" variant="filled" type="number" sx={{ mb: 2 }}/>
                <TextField className="campoTexto" id="filled-basic" label="Moeda 0,05" variant="filled" type="number" sx={{ mb: 2 }}/>
                <TextField id="standard-read-only-input" label="Resultado da soma" defaultValue="Preencha a cima" InputProps={{ readOnly: true,}} sx={{ mb: 2 }}variant="standard"/>

                {  /* este botao vai fechar e salvar o valor dentro do caixa */ }
                <Button variant="contained">Fechar o caixa</Button>

            </form>
        </div>
        </>
    )

}


export default Blocovalores;



