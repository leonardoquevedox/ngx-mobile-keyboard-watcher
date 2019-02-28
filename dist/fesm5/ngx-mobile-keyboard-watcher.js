import { Injectable, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxMobileKeyboardWatcher = /** @class */ (function () {
    function NgxMobileKeyboardWatcher() {
        this.initialViewHeight = 0;
        this.KEYBOARD_MIN_SIZE = 100;
        this.isDesktop = window.innerWidth > 768;
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxMobileKeyboardWatcher.prototype.initialize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isDesktop)
            return false;
        /** @type {?} */
        var heightDifference = 0;
        this.initialViewHeight = window.innerHeight;
        window.addEventListener("resize", (/**
         * @return {?}
         */
        function () {
            heightDifference = Math.abs(_this.initialViewHeight - window.innerHeight);
            if (heightDifference > 0 && heightDifference > _this.KEYBOARD_MIN_SIZE) {
                _this.shown.emit();
            }
            else {
                _this.hidden.emit();
            }
        }));
    };
    NgxMobileKeyboardWatcher.decorators = [
        { type: Injectable }
    ];
    NgxMobileKeyboardWatcher.ctorParameters = function () { return []; };
    return NgxMobileKeyboardWatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxMobileKeyboardWatcherModule = /** @class */ (function () {
    function NgxMobileKeyboardWatcherModule() {
    }
    NgxMobileKeyboardWatcherModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [NgxMobileKeyboardWatcher]
                },] }
    ];
    return NgxMobileKeyboardWatcherModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxMobileKeyboardWatcher, NgxMobileKeyboardWatcherModule };

//# sourceMappingURL=ngx-mobile-keyboard-watcher.js.map