/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Mobile keyboard service.
 */

import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class NgxMobileKeyboardWatcher {
  initialViewHeight = 0;
  KEYBOARD_MIN_SIZE = 100;
  isDesktop = window.innerWidth > 768;
  shown: EventEmitter<any> = new EventEmitter<any>();
  hidden: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  initialize() {
    if (this.isDesktop) return false;
    let heightDifference = 0;
    this.initialViewHeight = window.innerHeight;
    window.addEventListener("resize", () => {
      heightDifference = Math.abs(this.initialViewHeight - window.innerHeight);
      if (heightDifference > 0 && heightDifference > this.KEYBOARD_MIN_SIZE) {
        this.shown.emit();
      } else {
        this.hidden.emit();
      }
    });
  }
}
