export module Utils {
    export class Utils{
        stringLength(str:string):number{
            return new Counter().counter(str);
        }
    }

    class Counter {
        counter(str:string):number{
            return str.length;
        }
    }
}

/// <reference path="counter.ts" />
// namespace U {
//     export class Utils {
//         stringLength(str:string):number{
//             return new Counter().counter(str);
//         }
//     }
// }


