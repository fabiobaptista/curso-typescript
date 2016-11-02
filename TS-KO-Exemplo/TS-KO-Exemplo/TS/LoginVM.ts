import {ko, $, moment} from "References";

import {AlertType} from "AlertType";
import {BaseVM} from "BaseVM";

class LoginVM extends BaseVM {

    email: KnockoutObservable<string>;
    senha: KnockoutObservable<string>;

    constructor() {
        super();
        this.email = ko.observable("");
        this.senha = ko.observable("");
    }

    acessar(): void {
        let self: LoginVM = this;
        this.clearAlert();

        if (!this.email()) {
            this.showAlert("Email obrigatório!", AlertType.danger);
            return;
        }

        if (!this.senha()) {
            this.showAlert("Senha obrigatório!", AlertType.danger);
            return;
        }

        this.isBusy(true);
        $.get('https://jsonplaceholder.typicode.com/photos', {})
            .done(function () {
                self.showAlert("Redirecionando... " + moment().format("L"), AlertType.success);
            })
            .fail(function () {
                self.showAlert("Acesso negado cachoeira!", AlertType.danger); 
                self.isBusy(false);
            })
    }
}

ko.applyBindings(new LoginVM());