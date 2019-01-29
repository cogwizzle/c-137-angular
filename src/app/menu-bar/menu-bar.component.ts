import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @Input() variant: string = '';
  @Input() invert: boolean;
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

    switch (this.invert) {
      case true:
        this.variantText += '--invert';
        break;
      default:
        this.variantText += '';
        break;
    }
  }
}
