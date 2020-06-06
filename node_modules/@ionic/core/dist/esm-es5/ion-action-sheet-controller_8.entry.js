import { __awaiter, __generator } from "tslib";
import { r as registerInstance, d as getIonMode, h, H as Host } from './core-ca0488fc.js';
import './config-3c7f3790.js';
import { h as createOverlay, j as dismissOverlay, k as getOverlay } from './overlays-10640d86.js';
import { o as openURL, c as createColorClasses } from './theme-18cbe2cc.js';
var ActionSheetController = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Create an action sheet overlay with action sheet options.
     *
     * @param options The options to use to create the action sheet.
     */
    class_1.prototype.create = function (options) {
        return createOverlay('ion-action-sheet', options);
    };
    /**
     * Dismiss the open action sheet overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the action sheet to dismiss. If an id is not provided, it will dismiss the most recently opened action sheet.
     */
    class_1.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(document, data, role, 'ion-action-sheet', id);
    };
    /**
     * Get the most recently opened action sheet overlay.
     */
    class_1.prototype.getTop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, getOverlay(document, 'ion-action-sheet')];
            });
        });
    };
    return class_1;
}());
var AlertController = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Create an alert overlay with alert options.
     *
     * @param options The options to use to create the alert.
     */
    class_2.prototype.create = function (options) {
        return createOverlay('ion-alert', options);
    };
    /**
     * Dismiss the open alert overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the alert to dismiss. If an id is not provided, it will dismiss the most recently opened alert.
     */
    class_2.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(document, data, role, 'ion-alert', id);
    };
    /**
     * Get the most recently opened alert overlay.
     */
    class_2.prototype.getTop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, getOverlay(document, 'ion-alert')];
            });
        });
    };
    return class_2;
}());
var Anchor = /** @class */ (function () {
    function Anchor(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        this.onClick = function (ev) {
            openURL(_this.href, ev, _this.routerDirection);
        };
    }
    Anchor.prototype.componentDidLoad = function () {
        console.warn('[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.');
    };
    Anchor.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        var attrs = {
            href: this.href,
            rel: this.rel
        };
        return (h(Host, { onClick: this.onClick, class: Object.assign(Object.assign({}, createColorClasses(this.color)), (_a = {}, _a[mode] = true, _a['ion-activatable'] = true, _a)) }, h("a", Object.assign({}, attrs), h("slot", null))));
    };
    Object.defineProperty(Anchor, "style", {
        get: function () { return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return Anchor;
}());
var LoadingController = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Create a loading overlay with loading options.
     *
     * @param options The options to use to create the loading.
     */
    class_3.prototype.create = function (options) {
        return createOverlay('ion-loading', options);
    };
    /**
     * Dismiss the open loading overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the loading to dismiss. If an id is not provided, it will dismiss the most recently opened loading.
     */
    class_3.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(document, data, role, 'ion-loading', id);
    };
    /**
     * Get the most recently opened loading overlay.
     */
    class_3.prototype.getTop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, getOverlay(document, 'ion-loading')];
            });
        });
    };
    return class_3;
}());
var ModalController = /** @class */ (function () {
    function class_4(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Create a modal overlay with modal options.
     *
     * @param options The options to use to create the modal.
     */
    class_4.prototype.create = function (options) {
        return createOverlay('ion-modal', options);
    };
    /**
     * Dismiss the open modal overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the modal.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the modal to dismiss. If an id is not provided, it will dismiss the most recently opened modal.
     */
    class_4.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(document, data, role, 'ion-modal', id);
    };
    /**
     * Get the most recently opened modal overlay.
     */
    class_4.prototype.getTop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, getOverlay(document, 'ion-modal')];
            });
        });
    };
    return class_4;
}());
var PickerController = /** @class */ (function () {
    function class_5(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Create a picker overlay with picker options.
     *
     * @param options The options to use to create the picker.
     */
    class_5.prototype.create = function (options) {
        return createOverlay('ion-picker', options);
    };
    /**
     * Dismiss the open picker overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the picker to dismiss. If an id is not provided, it will dismiss the most recently opened picker.
     */
    class_5.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(document, data, role, 'ion-picker', id);
    };
    /**
     * Get the most recently opened picker overlay.
     */
    class_5.prototype.getTop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, getOverlay(document, 'ion-picker')];
            });
        });
    };
    return class_5;
}());
var PopoverController = /** @class */ (function () {
    function class_6(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Create a popover overlay with popover options.
     *
     * @param options The options to use to create the popover.
     */
    class_6.prototype.create = function (options) {
        return createOverlay('ion-popover', options);
    };
    /**
     * Dismiss the open popover overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the popover.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the popover.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the popover to dismiss. If an id is not provided, it will dismiss the most recently opened popover.
     */
    class_6.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(document, data, role, 'ion-popover', id);
    };
    /**
     * Get the most recently opened popover overlay.
     */
    class_6.prototype.getTop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, getOverlay(document, 'ion-popover')];
            });
        });
    };
    return class_6;
}());
var ToastController = /** @class */ (function () {
    function class_7(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Create a toast overlay with toast options.
     *
     * @param options The options to use to create the toast.
     */
    class_7.prototype.create = function (options) {
        return createOverlay('ion-toast', options);
    };
    /**
     * Dismiss the open toast overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast. For example, 'cancel' or 'backdrop'.
     * @param id The id of the toast to dismiss. If an id is not provided, it will dismiss the most recently opened toast.
     */
    class_7.prototype.dismiss = function (data, role, id) {
        return dismissOverlay(document, data, role, 'ion-toast', id);
    };
    /**
     * Get the most recently opened toast overlay.
     */
    class_7.prototype.getTop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, getOverlay(document, 'ion-toast')];
            });
        });
    };
    return class_7;
}());
export { ActionSheetController as ion_action_sheet_controller, AlertController as ion_alert_controller, Anchor as ion_anchor, LoadingController as ion_loading_controller, ModalController as ion_modal_controller, PickerController as ion_picker_controller, PopoverController as ion_popover_controller, ToastController as ion_toast_controller };
