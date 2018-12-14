import { CommonModule } from '@angular/common';
import { Injectable, EventEmitter, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMobileKeyboardWatcher {
    constructor() {
        this.initialViewHeight = 0;
        this.KEYBOARD_MIN_SIZE = 100;
        this.isDesktop = window.innerWidth > 768;
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
    }
    /**
     * @return {?}
     */
    initialize() {
        if (this.isDesktop)
            return false;
        /** @type {?} */
        let heightDifference = 0;
        this.initialViewHeight = window.innerHeight;
        window.addEventListener('resize', () => {
            heightDifference = Math.abs(this.initialViewHeight - window.innerHeight);
            if (heightDifference > 0 && heightDifference > this.KEYBOARD_MIN_SIZE) {
                this.shown.emit();
            }
            else {
                this.hidden.emit();
            }
        });
    }
}
NgxMobileKeyboardWatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxMobileKeyboardWatcher.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMobileKeyboardWatcherModule {
}
NgxMobileKeyboardWatcherModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [NgxMobileKeyboardWatcher]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxMobileKeyboardWatcherModule, NgxMobileKeyboardWatcher as ɵa };

//# sourceMappingURL=ngx-mobile-keyboard-watcher.js.map