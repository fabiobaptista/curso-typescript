var Pessoa = (function () {
    function Pessoa() {
    }
    Pessoa.prototype.method = function () {
        return "Nunca vi esse exemplo " + this.nome;
    };
    return Pessoa;
}());
var pessoa = new Pessoa();
pessoa.nome = "Fábio";
console.log(pessoa.method());
//# sourceMappingURL=app.js.map