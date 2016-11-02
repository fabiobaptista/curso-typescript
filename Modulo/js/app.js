"use strict";
var i = require("./Utils");
var AppClass = (function () {
    function AppClass() {
    }
    AppClass.prototype.method = function (param) {
        return new i.Utils.Utils().stringLength(param);
    };
    return AppClass;
}());
console.log(new AppClass().method("Teste"));
//# sourceMappingURL=app.js.map