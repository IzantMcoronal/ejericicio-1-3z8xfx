// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true 
//  * name: usuario2, country: france, money: 0, premiumAccount: false 
//  * name: usuario3, country: spain, money: 537, premiumAccount: false 
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true 
//  * name: usuario5, country: spain, money: 250, premiumAccount: false 
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true 
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false 

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". Puedes usar cualquier tipo de bucle, no el filter.
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener('load',onLoad);

var users = [];
var filtrado = [];

function onLoad(){

  createUsers();
  console.log(users)

  filterUsers();
  console.log(filtrado)

}

function createUsers (){

  var persona1 = new Object();
 persona1.nombre = 'Paco';
 persona1.country = 'spain';
 persona1.money = 199;
 persona1.premiumAccount = 'true';

  var persona2 = new Object();
 persona2.nombre = 'Anthuan';
 persona2.country = 'france';
 persona2.money = 0;
 persona2.premiumAccount = 'false';

  var persona3 = new Object();
 persona3.nombre = 'Javier';
 persona3.country = 'spain';
 persona3.money = 537;
 persona3.premiumAccount = 'false';

  var persona4 = new Object();
 persona4.nombre = 'Anthoni';
 persona4.country = 'italy';
 persona4.money = 1004;
 persona4.premiumAccount = 'true';

  var persona5 = new Object();
 persona5.nombre = 'Curro';
 persona5.country = 'spain';
 persona5.money = 250;
 persona5.premiumAccount = 'false';

  var persona6 = new Object();
 persona6.nombre = 'Kerry';
 persona6.country = 'ireland';
 persona6.money = 799;
 persona6.premiumAccount = 'true';

  var persona7 = new Object();
 persona7.nombre = 'Julio';
 persona7.country = 'spain';
 persona7.money = 3345;
 persona7.premiumAccount = 'false';

 users = [persona1, persona2, persona3, persona4, persona5, persona6, persona7]
}

function filterUsers (){

filtrado.push(users.filter(persona => persona.country == 'spain' && persona.money > 200));

}