var Situacao;
(function (Situacao) {
    Situacao[Situacao["Iniciado"] = 2] = "Iniciado";
    Situacao[Situacao["Pausado"] = 4] = "Pausado";
    Situacao[Situacao["Terminado"] = 6] = "Terminado";
    Situacao[Situacao["Cancelado"] = 8] = "Cancelado";
})(Situacao || (Situacao = {}));
console.log(Situacao.Cancelado);
//# sourceMappingURL=app.js.map