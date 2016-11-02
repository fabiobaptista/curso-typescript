

var v = "teste";

//var
//
//EX 1
// function primeira(){
//     console.log(v);
// }

// primeira();

//EX 2 Scope
// function primeira(){
//     if(v){
//        var b = v;
//     }
    
//     return b;
// }

// console.log(b);

//Let
//
//EX 1 Scope
// function primeira(){
//     let v: number = 10;
//     if(v){
//        let b = v;
//     }
//     return b;
// }

//EX 2
// a++;
// var a:number;
// a++;
// let a;

//EX 3 (redeclaração)
// var a = 10;
// var a = 20;

// let b = 10;
// let b = 20;

//Const
// Mesma regra do let, mas sem a redefinição
// const a:string = "Valor Constante";
// a = "editando";

//Destructuring
// Possibilita uma forma de desconstruir um array
//EX 1
// let input = [1, 2];
// let [first, second] = input;
// console.log(first);
// console.log(second);

//EX 2
// function destruct(): [number, string]{
//     return [1, "teste"];
// }

// let [result1, result2]: [number, string] = destruct();

// console.log(result1);
// console.log(result2);


//Multiplos tipos
// let a: string | number;
// a = "string";
// a = 10;
// a = true;