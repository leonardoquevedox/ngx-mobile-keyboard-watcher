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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWtleWJvYXJkLXdhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW9iaWxlLWtleWJvYXJkLXdhdGNoZXIvIiwic291cmNlcyI6WyJtb2JpbGUta2V5Ym9hcmQtd2F0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFHeEQsTUFBTSxPQUFPLHdCQUF3QjtJQVFqQztRQU5BLHNCQUFpQixHQUFHLENBQUMsQ0FBQTtRQUNyQixzQkFBaUIsR0FBRyxHQUFHLENBQUE7UUFDdkIsY0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFBO1FBQ25DLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUNsRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUE7SUFJbkQsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTyxLQUFLLENBQUE7O1lBQzVCLGdCQUFnQixHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUE7UUFDM0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDbkMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3hFLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUNwQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOzs7WUF6QkosVUFBVTs7Ozs7O0lBR1AscURBQXFCOztJQUNyQixxREFBdUI7O0lBQ3ZCLDZDQUFtQzs7SUFDbkMseUNBQWtEOztJQUNsRCwwQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIE1vYmlsZSBrZXlib2FyZCBzZXJ2aWNlLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hNb2JpbGVLZXlib2FyZFdhdGNoZXIge1xuXG4gICAgaW5pdGlhbFZpZXdIZWlnaHQgPSAwXG4gICAgS0VZQk9BUkRfTUlOX1NJWkUgPSAxMDBcbiAgICBpc0Rlc2t0b3AgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OFxuICAgIHNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gICAgaGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVza3RvcCkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gMFxuICAgICAgICB0aGlzLmluaXRpYWxWaWV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBoZWlnaHREaWZmZXJlbmNlID0gTWF0aC5hYnModGhpcy5pbml0aWFsVmlld0hlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodClcbiAgICAgICAgICAgIGlmIChoZWlnaHREaWZmZXJlbmNlID4gMCAmJiBoZWlnaHREaWZmZXJlbmNlID4gdGhpcy5LRVlCT0FSRF9NSU5fU0laRSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd24uZW1pdCgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuLmVtaXQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==