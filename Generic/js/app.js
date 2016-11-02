var Pessoa = (function () {
    function Pessoa() {
    }
    Pessoa.prototype.andar = function () {
        return "Andando..";
    };
    return Pessoa;
}());
var Pato = (function () {
    function Pato() {
    }
    Pato.prototype.andar = function () {
        return "Nadando...";
    };
    return Pato;
}());
var Passaro = (function () {
    function Passaro() {
    }
    return Passaro;
}());
var Operacoes = (function () {
    function Operacoes() {
    }
    Operacoes.prototype.writeLine = function (obj) {
        console.log(obj.andar());
    };
    return Operacoes;
}());
var o = new Operacoes();
o.writeLine(new Pessoa());
o.writeLine(new Pato());
var typee = function (x) { return x; };
//# sourceMappingURL=app.js.map