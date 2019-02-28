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
export class NgxMobileKeyboardWatcher {
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
        window.addEventListener("resize", (/**
         * @return {?}
         */
        () => {
            heightDifference = Math.abs(this.initialViewHeight - window.innerHeight);
            if (heightDifference > 0 && heightDifference > this.KEYBOARD_MIN_SIZE) {
                this.shown.emit();
            }
            else {
                this.hidden.emit();
            }
        }));
    }
}
NgxMobileKeyboardWatcher.decorators = [
    { type: Injectable }
];
NgxMobileKeyboardWatcher.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vYmlsZS1rZXlib2FyZC13YXRjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW9iaWxlLWtleWJvYXJkLXdhdGNoZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LW1vYmlsZS1rZXlib2FyZC13YXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pELE1BQU07SUFPSjtRQU5BLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDeEIsY0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFckMsQ0FBQzs7OztJQUVoQixVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sS0FBSyxDQUFDOztZQUM3QixnQkFBZ0IsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFROzs7UUFBRSxHQUFHLEVBQUU7WUFDckMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pFLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF0QkYsVUFBVTs7Ozs7SUFFVCxxREFBc0I7O0lBQ3RCLHFEQUF3Qjs7SUFDeEIsNkNBQW9DOztJQUNwQyx5Q0FBbUQ7O0lBQ25ELDBDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gTW9iaWxlIGtleWJvYXJkIHNlcnZpY2UuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neE1vYmlsZUtleWJvYXJkV2F0Y2hlciB7XG4gIGluaXRpYWxWaWV3SGVpZ2h0ID0gMDtcbiAgS0VZQk9BUkRfTUlOX1NJWkUgPSAxMDA7XG4gIGlzRGVza3RvcCA9IHdpbmRvdy5pbm5lcldpZHRoID4gNzY4O1xuICBzaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgaGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBpbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLmlzRGVza3RvcCkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gMDtcbiAgICB0aGlzLmluaXRpYWxWaWV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIGhlaWdodERpZmZlcmVuY2UgPSBNYXRoLmFicyh0aGlzLmluaXRpYWxWaWV3SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgIGlmIChoZWlnaHREaWZmZXJlbmNlID4gMCAmJiBoZWlnaHREaWZmZXJlbmNlID4gdGhpcy5LRVlCT0FSRF9NSU5fU0laRSkge1xuICAgICAgICB0aGlzLnNob3duLmVtaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZGVuLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19