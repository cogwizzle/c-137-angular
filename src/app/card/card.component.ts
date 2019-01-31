import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() variant: string = '';
  @Input() title: string = '';
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
