function somar(){
        var resultado = window.document.getElementById('resultado');
        var v100 = window.document.getElementById('nota100');
        var v50 = window.document.getElementById('nota50');
        var v20 = window.document.getElementById('nota20');
        var v10 = window.document.getElementById('nota10');
        var v5 = window.document.getElementById('nota5');
        var v2 = window.document.getElementById('nota2');
        var m1 = window.document.getElementById('moeda1');
        var m50 = window.document.getElementById('moeda050');
        var m25 = window.document.getElementById('moeda025');
        var m10= window.document.getElementById('moeda010');
        var m5 = window.document.getElementById('moeda005');
        var n100 = 100*Number(v100.value);
        var n50 = 50*Number(v50.value);
        var n20 = 20*Number(v20.value);
        var n10 = 10*Number(v10.value);
        var n5 = 5*Number(v5.value);
        var n2 = 2*Number(v2.value);
        var mo1 = 1*Number(m1.value);
        var mo50 = 0.50*Number(m50.value);
        var mo25 = 0.25*Number(m25.value);
        var mo10 = 0.10*Number(m10.value);
        var mo05 = 0.05*Number(m5.value);

        var res = mo1+mo05+mo10+mo25+mo50+n2+n5+n10+n20+n50+n100
        if (res == 150){
            resultado.innerHTML = `A soma é: ${res} está certo`;
            resultado.style.color = 'green';

        }else if (res <= 149){
            resultado.innerHTML = `A soma é: ${res} e está faltando dinheiro`;
            resultado.style.color = 'red';
        }else{
            resultado.innerHTML =  `A soma é: ${res} tem dinheiro a mais`;
            resultado.style.color = 'red';
        }

}

function somar2(){
    var resultado2 = window.document.getElementById('resultado2');
    var v2100 = window.document.getElementById('nota2100');
    var v250 = window.document.getElementById('nota250');
    var v220 = window.document.getElementById('nota220');
    var v210 = window.document.getElementById('nota210');
    var v25 = window.document.getElementById('nota25');
    var v22 = window.document.getElementById('nota22');
    var m21 = window.document.getElementById('moeda21');
    var m250 = window.document.getElementById('moeda2050');
    var m225 = window.document.getElementById('moeda2025');
    var m210= window.document.getElementById('moeda2010');
    var m25 = window.document.getElementById('moeda2005');
    var n2100 = 100*Number(v2100.value);
    var n250 = 50*Number(v250.value);
    var n220 = 20*Number(v220.value);
    var n210 = 10*Number(v210.value);
    var n25 = 5*Number(v25.value);
    var n22 = 2*Number(v22.value);
    var mo21 = 1*Number(m21.value);
    var mo250 = 0.50*Number(m250.value);
    var mo225 = 0.25*Number(m225.value);
    var mo210 = 0.10*Number(m210.value);
    var mo205 = 0.05*Number(m25.value);

    var res2 = mo21+mo205+mo210+mo225+mo250+n22+n25+n210+n220+n250+n2100;
    resultado2.innerHTML = `A soma é: ${res2}`;


}

function somar3(){
    var resultado3 = window.document.getElementById('resultado3');
    var entregas1 = window.document.getElementById('entregas1');
    var entregas2 = window.document.getElementById('entregas2');
    var entregas3 = window.document.getElementById('entregas3');
    var entregas4 = window.document.getElementById('entregas4');
    var entregas5 = window.document.getElementById('entregas5');
    var p1 = Number(entregas1.value);
    var p2 = Number(entregas2.value);
    var p3 = Number(entregas3.value);
    var p4 = Number(entregas4.value);
    var p5 = Number(entregas5.value);


    var res3 = p1+p2+p3+p4+p5;
    resultado3.innerHTML = `A soma é: ${res3}`;
}
