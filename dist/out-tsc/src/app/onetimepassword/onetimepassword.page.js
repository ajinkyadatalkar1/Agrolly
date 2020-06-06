import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
let OnetimepasswordPage = class OnetimepasswordPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    closeModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss(); // close the modal component
        });
    }
};
tslib_1.__decorate([
    Input("save_name"),
    tslib_1.__metadata("design:type", Object)
], OnetimepasswordPage.prototype, "save_name", void 0);
tslib_1.__decorate([
    Input("save_phone"),
    tslib_1.__metadata("design:type", Object)
], OnetimepasswordPage.prototype, "save_phone", void 0);
tslib_1.__decorate([
    Input("save_password"),
    tslib_1.__metadata("design:type", Object)
], OnetimepasswordPage.prototype, "save_password", void 0);
tslib_1.__decorate([
    Input("save_university"),
    tslib_1.__metadata("design:type", Object)
], OnetimepasswordPage.prototype, "save_university", void 0);
tslib_1.__decorate([
    Input("page_type_fgt"),
    tslib_1.__metadata("design:type", Object)
], OnetimepasswordPage.prototype, "page_type_fgt", void 0);
tslib_1.__decorate([
    Input("page_type_reg"),
    tslib_1.__metadata("design:type", Object)
], OnetimepasswordPage.prototype, "page_type_reg", void 0);
tslib_1.__decorate([
    Input("otp"),
    tslib_1.__metadata("design:type", Object)
], OnetimepasswordPage.prototype, "otp", void 0);
OnetimepasswordPage = tslib_1.__decorate([
    Component({
        selector: 'app-onetimepassword',
        templateUrl: './onetimepassword.page.html',
        styleUrls: ['./onetimepassword.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], OnetimepasswordPage);
export { OnetimepasswordPage };
//# sourceMappingURL=onetimepassword.page.js.map