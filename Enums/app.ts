//Enums são uma forma de criar descrição para (uma lista de) constantes do tipo numerico

// enum Situacao {
//     Iniciado,
//     Pausado,
//     Terminado,
//     Cancelado
// }

// enum Situacao {
//     Iniciado = 2,
//     Pausado, //3
//     Terminado, //4
//     Cancelado //5
// }

enum Situacao {
    Iniciado = 2,
    Pausado = 4,
    Terminado = 6,
    Cancelado = 8
}

console.log(Situacao.Cancelado);
//console.log(Situacao[Situacao.Cancelado]);

