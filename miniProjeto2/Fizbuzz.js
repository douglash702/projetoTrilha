// Divisível por 3 => fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => fizzBuzz
// Não divisível por 3 ou 5  => entrada
// Não e um numero => 'não e um  numero'
const resultado = fizzBuzz(6);
console.log(resultado)

function fizzBuzz (entrada) 
{
if ( typeof entrada !== "number")
return 'Não e um numero';

if (entrada % 3 === 0 && entrada % 5 === 0)
    return 'fizzBuzz';

if (entrada % 3 === 0)
    return 'fizz';

    if (entrada % 5 === 0)
        return 'Buzz';

    
return entrada;
//
}
