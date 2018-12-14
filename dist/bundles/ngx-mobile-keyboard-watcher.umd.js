(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-mobile-keyboard-watcher', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['ngx-mobile-keyboard-watcher'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxMobileKeyboardWatcher = /** @class */ (function () {
        function NgxMobileKeyboardWatcher() {
            this.initialViewHeight = 0;
            this.KEYBOARD_MIN_SIZE = 100;
            this.isDesktop = window.innerWidth > 768;
            this.shown = new core.EventEmitter();
            this.hidden = new core.EventEmitter();
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
                window.addEventListener('resize', function () {
                    heightDifference = Math.abs(_this.initialViewHeight - window.innerHeight);
                    if (heightDifference > 0 && heightDifference > _this.KEYBOARD_MIN_SIZE) {
                        _this.shown.emit();
                    }
                    else {
                        _this.hidden.emit();
                    }
                });
            };
        NgxMobileKeyboardWatcher.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxMobileKeyboardWatcher.ctorParameters = function () { return []; };
        return NgxMobileKeyboardWatcher;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxMobileKeyboardWatcherModule = /** @class */ (function () {
        function NgxMobileKeyboardWatcherModule() {
        }
        NgxMobileKeyboardWatcherModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        providers: [NgxMobileKeyboardWatcher]
                    },] }
        ];
        return NgxMobileKeyboardWatcherModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxMobileKeyboardWatcherModule = NgxMobileKeyboardWatcherModule;
    exports.ɵa = NgxMobileKeyboardWatcher;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-mobile-keyboard-watcher.umd.js.map