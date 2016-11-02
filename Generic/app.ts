
//É uma forma de construir codigo reutilizavel, fornecendo ao consumidor
//a possibilidade de definir como quer utilizar

interface IMovimento{
    andar():string;
}

class Pessoa implements IMovimento{
    andar():string{
        return "Andando..";
    }
}

class Pato implements IMovimento{
    andar():string{
        return "Nadando...";
    }
}

class Passaro{
    //Sobre a maneira queo TS infere o tipo (interface)
    // andar():string{
    //     return "Nadando...";
    // }

}

class Operacoes<T>{
    writeLine<T extends IMovimento>(obj:T):void{
        console.log(obj.andar());
    }
}

// class Operacoes<T extends IMovimento>{
//     writeLine(obj:T):void{
//         console.log(obj.andar());
//     }
// }

//let o = new Operacoes<IMovimento>();
let o = new Operacoes();
o.writeLine(new Pessoa());
o.writeLine(new Pato());
//o.writeLine(new Passaro());

//Type
let typee:  <T>(x: T) => T = function<T>(x: T){ return x };
