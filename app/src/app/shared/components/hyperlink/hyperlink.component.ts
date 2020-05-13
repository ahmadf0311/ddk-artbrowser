import { Component, OnInit, Input } from '@angular/core';
import { Entity } from '../../models/models';

@Component({
  selector: 'app-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.scss']
})
export class HyperlinkComponent {
  @Input()
  label: string;

  @Input()
  value: string;

  @Input()
  values: Entity[];

  constructor() {}

  ngOnChanges() {
    this.checkRequiredFields();
  }

  /**
   * This Method is for debugging purposes.
   * Errors will not be shown in productive state.
   */
  private checkRequiredFields() {
    if (this.label === null) {
      throw new TypeError("Attribute 'label' is required");
    }
  }
}