/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Mobile keyboard service.
 */
import { EventEmitter } from '@angular/core';
export declare class NgxMobileKeyboardWatcher {
    initialViewHeight: number;
    KEYBOARD_MIN_SIZE: number;
    isDesktop: boolean;
    shown: EventEmitter<any>;
    hidden: EventEmitter<any>;
    constructor();
    initialize(): boolean;
}
