/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true
  // Tu código:
  function reverso(num) {
    rNum = num + '';
    return rNum.split('').reverse().join('');
    // let revNum = ''
    // str = num + ''
    // for (i = str.length - 1; i >= 0; i--) {
    //   revNum += str[i]
    // }
    // console.log(revNum)
    // return revNum
  }
  num = num + ''
  return num === reverso(num)
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico