// velocidade maxima de 70 
// a cada 5 km acima do limite voce ganha um ponto 
// Math.floor()
// caso pontos maior que 12 -> " Carteira Suspendida "
verificarVelocidade(90);


function verificarVelocidade (velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
if (velocidade <= velocidadeMaxima)
    console,console.log("Ok");
    else {
     const pontos = Math.floor (((velocidade - velocidadeMaxima ) / KmPorPonto));
     if (pontos >= 12)
        console.log('Carteira Suspensa');
        else
        console.log(pontos, "pontos");
    }



}