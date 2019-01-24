import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @Input() variant: string = '';
  @Input() cls: string = '';
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
