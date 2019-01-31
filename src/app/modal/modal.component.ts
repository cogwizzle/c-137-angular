import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() variant: string = '';
  @Input() title: string = '';
  @Input() isVisible: string = 'false';
  variantText: string = '';
  visible: string = '--hidden'

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

    switch (this.isVisible) {
      case 'true':
        this.visible = '';
        break;
      default:
        this.visible = '--hidden';
        break;
    }
  }
}
