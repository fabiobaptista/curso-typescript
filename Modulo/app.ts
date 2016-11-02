//O módulo é uma forma de organizar o código e definir o que será visível/acessado
//fora do seu escopo

//Tudo que é declardo dentro de um módulo é visivel apenas dentro dele mesmo,
//até que seja explicitamente declarado o contrário.

//O modulos se relacionam entre desde que sejam referenciados

//Os Tipos de escrita de modulos mais usados são CommonJS e AMD 

//Qualquer arquivo que tenha um import ou export já é considerado um modulo 
//na versão mais nova do TS

import i = require("./Utils");

class AppClass  {
        prop:string ;

        method(param:string):number{
            return new i.Utils.Utils().stringLength(param);
        }
}



//import {Utils} from "./utils";
//import * as u from "./utils";

/// <reference path="utils.ts" />

// export class AppClass  {
//      prop:string ;

//     method(param:string):number{
//         return new Utils().stringLength(param);
//         //return new U.Utils().stringLength(param);
        
//     }
// }


console.log(new AppClass().method("Teste"));