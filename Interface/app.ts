
//Extends
// interface IMovimentos {
//     andar():void; 
// }

interface IPessoa { // extends IMovimentos{
    nome:string;
    //sobreNome?:string;
    
    //readonly fullName:string;
    
    [propName: string]: any;
    //erro de tipo
    //[propName: string]: number;
    
    assustar():string; 
}


class Pessoa1 implements IPessoa{
    
    nome:string;
    //sobreNome:string;
    //fullName:string;
    // constructor(){
    //     this.fullName = this.nome; // + this.sobreNome || "";
    // }
    
    assustar():string{
        return "Cê eh loco cachoeira!?";
    }

    //extend
    andar():void {}
}

class Pessoa2 implements IPessoa{
    
    nome:string;
    //fullName:string;
    // constructor(){
    //     this.fullName = this.nome; // + this.sobreNome || "";
    // }

    assustar():string{
        return "are you crazy mr. waterfall!?";
    }
}

let p1 = new Pessoa1();
//p1.fullName = "hkjhk"; 
//p1["fullName"] = "hkjhk"; 

//readonly/index signature
 //let p3: IPessoa = {nome: "Fabio", fullName: "Fabio mesmo", assustar: ()=> ""};
 //p3.fullName = "sdfsdf";
 //p3["fullName"] = "hkjhk";

//console.log(p1.fullName);