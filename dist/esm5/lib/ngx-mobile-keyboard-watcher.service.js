/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Mobile keyboard service.
 */
import { Injectable, EventEmitter } from "@angular/core";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vYmlsZS1rZXlib2FyZC13YXRjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW9iaWxlLWtleWJvYXJkLXdhdGNoZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LW1vYmlsZS1rZXlib2FyZC13YXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBUUU7UUFOQSxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNwQyxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXJDLENBQUM7Ozs7SUFFaEIsNkNBQVU7OztJQUFWO1FBQUEsaUJBWUM7UUFYQyxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTyxLQUFLLENBQUM7O1lBQzdCLGdCQUFnQixHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDNUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVE7OztRQUFFO1lBQ2hDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6RSxJQUFJLGdCQUFnQixHQUFHLENBQUMsSUFBSSxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3JFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdEJGLFVBQVU7OztJQXVCWCwrQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLHdCQUF3Qjs7O0lBQ25DLHFEQUFzQjs7SUFDdEIscURBQXdCOztJQUN4Qiw2Q0FBb0M7O0lBQ3BDLHlDQUFtRDs7SUFDbkQsMENBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBNb2JpbGUga2V5Ym9hcmQgc2VydmljZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4TW9iaWxlS2V5Ym9hcmRXYXRjaGVyIHtcbiAgaW5pdGlhbFZpZXdIZWlnaHQgPSAwO1xuICBLRVlCT0FSRF9NSU5fU0laRSA9IDEwMDtcbiAgaXNEZXNrdG9wID0gd2luZG93LmlubmVyV2lkdGggPiA3Njg7XG4gIHNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBoaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXNrdG9wKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSAwO1xuICAgIHRoaXMuaW5pdGlhbFZpZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgaGVpZ2h0RGlmZmVyZW5jZSA9IE1hdGguYWJzKHRoaXMuaW5pdGlhbFZpZXdIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgaWYgKGhlaWdodERpZmZlcmVuY2UgPiAwICYmIGhlaWdodERpZmZlcmVuY2UgPiB0aGlzLktFWUJPQVJEX01JTl9TSVpFKSB7XG4gICAgICAgIHRoaXMuc2hvd24uZW1pdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRkZW4uZW1pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=