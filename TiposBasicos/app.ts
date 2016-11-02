
//Boolean
// true/false
let bool: boolean = true;

//Number
// Todos os números são ponto flutuante em TS
let num: number = 0;
let decimal: number = 1.2;

//String
//
let str1: string = "_uma string_";
let str2: string = "_outra string_";

    let mltLine: string = `uma string 
    em varias linhas
    sem a necessidade de concatenação`;
    //console.log(mltLine);

    //Template string
    let tmp = `Concatenados: ${str1} e ${str2}`;
    //console.log(tmp);

//Array
//
let arr1: string[] = ["string 1", "string 2"];
let arr2: Array<string> = ["string 1", "string 2"];
let arr3: string[] = new Array<string>("string 1", "string 2");

//Tuple
// Permite definie uma matriz com um tamanho/tipo definidos
let tps: [string, number] = ["string", 1];

//Any
// É o tipo que mais representa a atual versão do JS, ele pode receber qualquer tipo
// e pode ser modificado tipo/valor em tempo de execução
let any1: any = "string";
any1 = 2;
any1 = true;

//Void
//Utilizado na marioria das vezes como retorno de function/metodo
function voidi(message: string): void {
    throw new Error(message);
}

//Null and Undefined
//
let nll: null = null;
let und: undefined = undefined;
let str3: string = null;
str3 = undefined;

//Never
// Representa um tipo/retorno que nunca acontecerá, por exemplo uma function/metodo
// que sempre lança um erro
function error(message: string): never {
    throw new Error(message);
}

//Date
// É um objeto utilizado do JS
let dt: Date = new Date(2016,1,1);
//console.log(dt);

//Type Assertion
interface IAss1{ num: number; } 

let ass1:any = <IAss1>{};
let ass1_1:any = {} as IAss1;
let ass2:number = 0;
ass2 = ass1.num;