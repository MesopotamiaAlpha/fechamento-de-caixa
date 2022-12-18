import React from "react";
import { TextField,Button } from "@mui/material";
import './valores.css';

const Blocovalores = () => {
    
    return (
        <>
        <div className="bloco">
            <h1 className="titulo">Digite a quantidade de notas no caixa</h1>
        <TextField className="campoTexto" id="filled-basic" label="Nota 100" variant="filled" type="number"  sx={{ mb: 2 }}/>
        <TextField className="campoTexto" id="filled-basic" label="Nota 50" variant="filled" type="number" sx={{ mb: 2 }}/>
        <TextField className="campoTexto" id="filled-basic" label="Nota 20" variant="filled" type="number" sx={{ mb: 2 }}/>
        <TextField className="campoTexto" id="filled-basic" label="Nota 10" variant="filled" type="number" sx={{ mb: 2 }}/>
        <TextField className="campoTexto" id="filled-basic" label="Nota 5" variant="filled" type="number" sx={{ mb: 2 }}/>
        <TextField className="campoTexto" id="filled-basic" label="Moeda 1,00" variant="filled" type="number" sx={{ mb: 2 }}/>
        <TextField className="campoTexto" id="filled-basic" label="Moeda 0,50" variant="filled" type="number" sx={{ mb: 2 }}/>
        <TextField className="campoTexto" id="filled-basic" label="Moeda 0,25" variant="filled" type="number" sx={{ mb: 2 }}/>
        <TextField className="campoTexto" id="filled-basic" label="Moeda 0,10" variant="filled" type="number" sx={{ mb: 2 }}/>
        <TextField className="campoTexto" id="filled-basic" label="Moeda 0,05" variant="filled" type="number" sx={{ mb: 2 }}/>
        <Button variant="contained">Somar</Button>
        </div>
        </>
    )

}


export default Blocovalores;



