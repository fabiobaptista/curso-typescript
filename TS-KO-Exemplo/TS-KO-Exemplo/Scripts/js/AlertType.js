define(["require", "exports"], function (require, exports) {
    "use strict";
    (function (AlertType) {
        AlertType[AlertType["success"] = 0] = "success";
        AlertType[AlertType["danger"] = 1] = "danger";
        AlertType[AlertType["warning"] = 2] = "warning";
        AlertType[AlertType["info"] = 3] = "info";
    })(exports.AlertType || (exports.AlertType = {}));
    var AlertType = exports.AlertType;
});
//# sourceMappingURL=AlertType.js.map