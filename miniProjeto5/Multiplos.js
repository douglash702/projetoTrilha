// criar função que retorna a
// somar os multiplos de 3 e 5
// multiplos de 3 dentro de 10
// 3, 6, 9
// multiplos de 10 dentro de 10
// 5, 10
// somando os multiplos 
// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os dois
somar(10);
function somar(limite) {
    let multiplosde3 = 0;
    let multiplosde5 = 0;
for(i = 0; i <= limite; i++) {
if(i % 3 === 0)
    multiplosde3 += i;
    if (i % 5 === 0)
    multiplosde5 += i;

}
console.log(multiplosde3 + multiplosde5);


}