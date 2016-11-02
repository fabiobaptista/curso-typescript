define(["require", "exports", "References", "AlertType"], function (require, exports, References_1, AlertType_1) {
    "use strict";
    var BaseVM = (function () {
        function BaseVM() {
            this.alertVisible = References_1.ko.observable(false);
            this.alertMessage = References_1.ko.observable(null);
            this.alertType = References_1.ko.observable("alert-" + AlertType_1.AlertType[AlertType_1.AlertType.info]);
            this.isBusy = References_1.ko.observable(false);
        }
        BaseVM.prototype.showAlert = function (message, alertType) {
            this.alertMessage(message);
            this.alertType("alert-" + AlertType_1.AlertType[alertType]);
            this.alertVisible(true);
        };
        BaseVM.prototype.clearAlert = function () {
            this.alertMessage("");
            this.alertType("alert-" + AlertType_1.AlertType[AlertType_1.AlertType.info]);
            this.alertVisible(false);
        };
        return BaseVM;
    }());
    exports.BaseVM = BaseVM;
});
//# sourceMappingURL=BaseVM.js.map