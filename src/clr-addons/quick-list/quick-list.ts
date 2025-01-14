/*
 * Copyright (c) 2018 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CLR_BLANK_OPTION, ClrQuickListValue } from './add-option.service';

@Component({
  selector: 'clr-quick-list',
  host: { '[class.quick-list]': 'true' },
  templateUrl: './quick-list.html',
})
export class ClrQuickList<T> implements OnInit {
  @Input('clrBlankOption') blankOption: ClrQuickListValue<T> = CLR_BLANK_OPTION;
  @Input('clrAllValues') allValues: Array<ClrQuickListValue<T>> = [this.blankOption];
  @Input('clrMandatory') mandatory: boolean = false;
  @Input('clrValues') values: Array<ClrQuickListValue<T>> = [];
  @Input('clrAddLabel') addLabel: string = 'ADD';
  @Input('clrControlClasses') controlClasses = 'clr-col-md-10';
  @Output('clrValuesChanged') valuesChanged = new EventEmitter<Array<ClrQuickListValue<T>>>();
  @Output('clrEmptyOptionAdded') emptyOptionAdded = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.values.length === 0 && this.mandatory) {
      this.values.push(this.blankOption);
    }
  }

  onValueChanged(value: ClrQuickListValue<T>, i: number) {
    if (!!value) {
      this.values[i] = value;
      this.valuesChanged.emit(this.values);
    }
  }

  onRemoveValue(i: number) {
    this.values.splice(i, 1);
    this.valuesChanged.emit(this.values);
  }

  addBlankOption() {
    if (!this.hasBlankOption()) {
      this.values.push(this.blankOption);
      this.valuesChanged.emit(this.values);
      this.emptyOptionAdded.emit();
    }
  }

  hasBlankOption() {
    return this.values.map(val => val.id).includes(this.blankOption.id);
  }

  addNotPossible() {
    return this.hasBlankOption() || this.values.length === this.allValues.length;
  }
}
