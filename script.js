// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true 
//  * name: usuario2, country: france, money: 0, premiumAccount: false 
//  * name: usuario3, country: spain, money: 537, premiumAccount: false 
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true 
//  * name: usuario5, country: spain, money: 250, premiumAccount: false 
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true 
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false 

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener('load',onLoad);

var users

function onLoad(){
  console.log('hi')

  createUsers();
  console.log(createUsers)
}

function createUsers (){

  var persona1 = new Object();
 persona1.nombre = '';
 persona1.country = '';
 persona1.money = 0;
 persona1.premiumAccount = '';

  var persona2 = new Object();
 persona2.nombre = '';
 persona2.country = '';
 persona2.money = 0;
 persona2.premiumAccount = '';

  var persona3 = new Object();
 persona3.nombre = '';
 persona3.country = '';
 persona3.money = 0;
 persona3.premiumAccount = '';

  var persona4 = new Object();
 persona4.nombre = '';
 persona4.country = '';
 persona4.money = 0;
 persona4.premiumAccount = '';

  var persona5 = new Object();
 persona5.nombre = '';
 persona5.country = '';
 persona5.money = 0;
 persona5.premiumAccount = '';

  var persona6 = new Object();
 persona6.nombre = '';
 persona6.country = '';
 persona6.money = 0;
 persona6.premiumAccount = '';

  var persona7 = new Object();
 persona7.nombre = '';
 persona7.country = '';
 persona7.money = 0;
 persona7.premiumAccount = '';

 Users = [persona1, persona2, persona1, persona3, persona4, persona5, persona6, persona7]
}