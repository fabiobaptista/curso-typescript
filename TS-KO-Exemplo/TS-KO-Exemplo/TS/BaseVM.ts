import {ko, $} from "References";
import {AlertType} from "AlertType";

export class BaseVM {

    alertMessage: KnockoutObservable<string>;
    alertVisible: KnockoutObservable<boolean>;
    alertType: KnockoutObservable<string>;

    isBusy: KnockoutObservable<boolean>;

    constructor() {
        this.alertVisible = ko.observable(false);
        this.alertMessage = ko.observable(null);
        this.alertType = ko.observable("alert-" + AlertType[AlertType.info]);
        this.isBusy = ko.observable(false);
    }

    protected showAlert(message: string, alertType: AlertType): void {
        this.alertMessage(message);
        this.alertType("alert-" + AlertType[alertType]);
        this.alertVisible(true);
    }

    protected clearAlert(): void {
        this.alertMessage("");
        this.alertType("alert-" + AlertType[AlertType.info]);
        this.alertVisible(false);
    }
} 