
//Diferença de Classe e Objeto

class Pessoa {
    //static outroNome: string;

    //"strictNullChecks": true
    //optProp?:boolean;

    //[others: string]: any;

    nome: string;
    constructor(){
        //this.readOnlyProp = "_STRING_";
    }

    // private prop:string;
    //os parametros podem ser readonly, private
    // constructor(public nome:string){}

    // protected propProtected: string;

    // readonly readOnlyProp: string = "_STRING_";

    method():string{
        return `Nunca vi esse exemplo ${this.nome}`;
    }

    // set outroNome(outro:string){
    //     this.nome = outro;
    // }

    // get outroNome(): string {
    //     return this.nome;
    // }
}

// let pessoa: {
//     nome:string;
//     method:() => string;
// };

let pessoa = new Pessoa();
pessoa.nome = "Fábio";

//Optional
//pessoa.optProp = null;

//Index signature
//pessoa["other"] = "fsdfsdf";

// let pessoa = new Pessoa("Fabio");
// pessoa.nome = "FABIO";
//pessoa.prop

//problema com this
// pessoa = {nome: "Fábio", 
//             method:() => { return `Nunca vi esse exemplo ${this.nome}` } };

//Default
console.log(pessoa.method());

//GET/SET
//Pessoa.outroNome = "Fábio";
//console.log(Pessoa.outroNome);

// class PessoaJuridica extends Pessoa {
//     //Deve chamar o super()
//     constructor()
//     {
//         super();
//         this.propProtected = "Protegida";        
//     }
// }
