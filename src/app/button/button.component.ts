import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() variant: string = '';
  @Input() onClick: Function;
  variantText: string = '';

  constructor() {}

  ngOnInit() {
    switch (this.variant) {
      case 'success':
        this.variantText = '--success';
        break;
      case 'warning':
        this.variantText = '--warning';
        break;
      case 'danger':
        this.variantText = '--danger';
        break;
      case 'attention':
        this.variantText = '--attention';
        break;
      default:
        this.variantText = '';
        break;
    }
  }

}
