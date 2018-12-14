/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Mobile keyboard service.
 */
import { Injectable, EventEmitter } from '@angular/core';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxMobileKeyboardWatcher.ctorParameters = function () { return []; };
    return NgxMobileKeyboardWatcher;
}());
export { NgxMobileKeyboardWatcher };
if (false) {
    /** @type {?} */
    NgxMobileKeyboardWatcher.prototype.initialViewHeight;
    /** @type {?} */
    NgxMobileKeyboardWatcher.prototype.KEYBOARD_MIN_SIZE;
    /** @type {?} */
    NgxMobileKeyboardWatcher.prototype.isDesktop;
    /** @type {?} */
    NgxMobileKeyboardWatcher.prototype.shown;
    /** @type {?} */
    NgxMobileKeyboardWatcher.prototype.hidden;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWtleWJvYXJkLXdhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW9iaWxlLWtleWJvYXJkLXdhdGNoZXIvIiwic291cmNlcyI6WyJtb2JpbGUta2V5Ym9hcmQtd2F0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFeEQ7SUFTSTtRQU5BLHNCQUFpQixHQUFHLENBQUMsQ0FBQTtRQUNyQixzQkFBaUIsR0FBRyxHQUFHLENBQUE7UUFDdkIsY0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFBO1FBQ25DLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUNsRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUE7SUFJbkQsQ0FBQzs7OztJQUVELDZDQUFVOzs7SUFBVjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sS0FBSyxDQUFBOztZQUM1QixnQkFBZ0IsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFBO1FBQzNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3hFLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbkUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNwQjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOztnQkF6QkosVUFBVTs7OztJQTBCWCwrQkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLHdCQUF3Qjs7O0lBRWpDLHFEQUFxQjs7SUFDckIscURBQXVCOztJQUN2Qiw2Q0FBbUM7O0lBQ25DLHlDQUFrRDs7SUFDbEQsMENBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBNb2JpbGUga2V5Ym9hcmQgc2VydmljZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4TW9iaWxlS2V5Ym9hcmRXYXRjaGVyIHtcblxuICAgIGluaXRpYWxWaWV3SGVpZ2h0ID0gMFxuICAgIEtFWUJPQVJEX01JTl9TSVpFID0gMTAwXG4gICAgaXNEZXNrdG9wID0gd2luZG93LmlubmVyV2lkdGggPiA3NjhcbiAgICBzaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICAgIGhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2t0b3ApIHJldHVybiBmYWxzZVxuICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IDBcbiAgICAgICAgdGhpcy5pbml0aWFsVmlld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgaGVpZ2h0RGlmZmVyZW5jZSA9IE1hdGguYWJzKHRoaXMuaW5pdGlhbFZpZXdIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICAgICAgICBpZiAoaGVpZ2h0RGlmZmVyZW5jZSA+IDAgJiYgaGVpZ2h0RGlmZmVyZW5jZSA+IHRoaXMuS0VZQk9BUkRfTUlOX1NJWkUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3duLmVtaXQoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbi5lbWl0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=