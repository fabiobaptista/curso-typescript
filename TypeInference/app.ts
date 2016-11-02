//Inferência é a maneira de concluir algo por dedução/conhecimento
//quando não se tem a informação explicitamente definida

 //Usa-se inferência para definir o tipo de uma variável quando o mesmo não é 
 //explicitamente definido

//Será determinado por inferência que 'a' é do tipo number
 //let a = 1;

//Neste caso o tipo será number e null
// let x = [0, 1, null]; 
// x = [0,1,2,3];
// x = [null, null];
// x = ["string"];

//Any type
//Inferência por contexto
// window.onmousedown = function(mouseEvent) {
//     console.log(mouseEvent.buton);
// };

// window.onmousedown = function(mouseEvent: any) {
//     console.log(mouseEvent.buton);
// };