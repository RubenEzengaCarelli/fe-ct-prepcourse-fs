/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if (x > y) {
      return x
   } else if (x < y) {
      return y
   } else { 
      if (Math.random() < 0.5) {
         return x
      } else {
         return y
      }
   }

}


function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if (edad >= 18) {
      permiso = 'Allowed'
      return permiso
   } else {
      permiso = 'Not allowed'
      return permiso
   }
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   switch (status) {
   case 1:
      estado = 'Online'
      return estado
   case 2:
      estado = 'Away'
      return estado
   default:
      estado = 'Offline'
      return estado
   }
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   switch (idioma) {
      case 'aleman':
         saludo = 'Guten Tag!'
         return saludo
      case 'mandarin':
         saludo = 'Ni Hao!'
         return saludo
      case 'ingles':
         saludo = 'Hello!'
         return saludo
      default:
      case 'undefined':
         saludo = 'Hola!'
         return saludo
      }
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch (color) {
      case 'blue':
         color = 'This is blue'
         return color
      case 'red':
         color = 'This is red'
         return color
      case 'green':
         color = 'This is green'
         return color
      case 'orange':
         color = 'This is orange'
         return color
      default:
         color = 'Color not found'
         return color
      }
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if (num === 10 || num === 5) {
      bool = true
      return bool
   } else {
      bool = false
      return bool
   }
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if (num > 20 && num < 50) {
      bool = true
      return bool
   } else {
      bool = false
      return bool
   }
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if (num === Math.round(num)) {
      bool = true
      return bool
   } else {
      bool = false
      return bool
   }
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 3 === 0 && num % 5 === 0) {
      resultado = 'fizzbuzz'
      return resultado
   } else if (num % 3 === 0) {
      resultado = 'fizz'
      return resultado
   } else if (num % 5 === 0) {
      resultado = 'buzz'
      return resultado
   } else {
      resultado = false
      return resultado
   }
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if (num1 > num2 && num1 > num3 && num1 > 0) {
      respuesta = 'Numero 1 es mayor y positivo'
      return respuesta
   } else if (num1 < 0 || num2 < 0 || num3 < 0) {
      respuesta = 'Hay negativos'
      return respuesta
   } else if (num3 > num1 && num3 > num2) {
      respuesta = num3 + 1
      return respuesta
   } else if (num3 === 0 && num2 === 0 && num1 === 0) {
      respuesta = 'Error'
      return respuesta
   } else {
      respuesta = false
      return respuesta
   }
}
function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if (num <= 1) {
      respuesta = false
      return respuesta
   }
   for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
      respuesta = false
      return respuesta
      }
   }
   return true;
}


function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if (valor === true) {
      respuesta = 'Soy verdadero'
      return respuesta
   } else {
      respuesta = 'Soy falso'
      return respuesta
   }
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   if (Math.abs(num) >= 100 && Math.abs(num) < 1000) {
      respuesta = true
      return respuesta
   } else {
      respuesta = false
      return respuesta
   }
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let i = 0
   do {
         i = i + 1
         num = num + 5
   } while (i < 8)

   return num 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
