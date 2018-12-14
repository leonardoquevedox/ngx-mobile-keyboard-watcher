/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxMobileKeyboardWatcher } from './mobile-keyboard-watcher'

@NgModule({
    imports: [CommonModule],
    providers: [NgxMobileKeyboardWatcher]
})
export class NgxMobileKeyboardWatcherModule { }