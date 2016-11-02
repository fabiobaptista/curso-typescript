var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "References", "AlertType", "BaseVM"], function (require, exports, References_1, AlertType_1, BaseVM_1) {
    "use strict";
    var LoginVM = (function (_super) {
        __extends(LoginVM, _super);
        function LoginVM() {
            _super.call(this);
            this.email = References_1.ko.observable("");
            this.senha = References_1.ko.observable("");
        }
        LoginVM.prototype.acessar = function () {
            var self = this;
            this.clearAlert();
            if (!this.email()) {
                this.showAlert("Email obrigatório!", AlertType_1.AlertType.danger);
                return;
            }
            if (!this.senha()) {
                this.showAlert("Senha obrigatório!", AlertType_1.AlertType.danger);
                return;
            }
            this.isBusy(true);
            References_1.$.get('https://jsonplaceholder.typicode.com/photos', {})
                .done(function () {
                self.showAlert("Redirecionando...", AlertType_1.AlertType.success);
            })
                .fail(function () {
                self.showAlert("Acesso negado cachoeira!", AlertType_1.AlertType.danger);
                self.isBusy(false);
            });
        };
        return LoginVM;
    }(BaseVM_1.BaseVM));
    References_1.ko.applyBindings(new LoginVM());
});
//# sourceMappingURL=LoginVM.js.map