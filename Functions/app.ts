//É a principal estrutura/bloco do JS 

//Forma de declaração
//Named function

// function Named(){

// }

//Anonymous/Literal function 
//let a = function(){};

//Como em JS pode capturar variáveis de fora de seu scope
// let z = 100;

// function addToZ(x:number, y:number) {
//     return x + y + z;
// }

//Tipos para as funções
// function Tipos(a:string, b: number): void {
    
// }

// let myFunc: (x: string, y: string) => string;
// myFunc = function(x: string, y: string): string { 
//     return `${x} e ${y}`; 
// };

//Por inferência

// let myFunc = function(x: string, y: string): string { 
//     return `${x} e ${y}`; 
// };

//Parametro Opcional
// function Tipos(a:string, b?: number): void {}

// Tipos("string");

//Parametro Default
// function Tipos(a:string, b: number = 0): void {}

// Tipos("string", 10);

//Parametro Rest
// function Tipos(a:string, ...b: number[]): void {}

// Tipos("string", 10, 2, 4, 10);

//Scope do this
//
// function single(){
//     console.log(this);
// }
//single();

// let a = {desc: "obj", func: single };
// a.func();

//Arrow functions
//

// let a = ():void => console.log(this);
// a();

// function Person(age: number) {
//     this.age = age
//      this.growOld = function() {
//          this.age++;
//      }

//     //this.growOld = () => {
//     //    this.age++;
//     //}
// }


// var person = new Person(1);
// setTimeout(person.growOld,1000);

// setTimeout(function() { 
//     console.log(person.age);
// },2000);

//Overload - Sobrecarga
//
// function single(a:string): void;
// function single(a:string, b?: string): string;
// function single(a?:number): void;
// function single(a?: any, b?: any ): any {
//     console.log(this);
// }
// single();

