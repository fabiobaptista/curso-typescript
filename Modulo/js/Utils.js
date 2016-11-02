"use strict";
var Utils;
(function (Utils_1) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.prototype.stringLength = function (str) {
            return new Counter().counter(str);
        };
        return Utils;
    }());
    Utils_1.Utils = Utils;
    var Counter = (function () {
        function Counter() {
        }
        Counter.prototype.counter = function (str) {
            return str.length;
        };
        return Counter;
    }());
})(Utils = exports.Utils || (exports.Utils = {}));
//# sourceMappingURL=Utils.js.map