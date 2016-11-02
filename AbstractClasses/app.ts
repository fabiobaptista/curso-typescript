
abstract class PessoaAbstract{
    constructor(protected nome:string){}
    abstract assustar():string; 
}

class Pessoa1 extends PessoaAbstract{
    constructor(){
        super("Pessoa 1")
    }

    assustar():string{
        return "Cê eh loco cachoeira!?";
    }
}

class Pessoa2 extends PessoaAbstract{
    constructor(){
        super("Pessoa 2")
    }

    assustar():string{
        return "are you crazy mr. waterfall!?";
    }
}
