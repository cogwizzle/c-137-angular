import { storiesOf } from '@storybook/angular';
import { ModalComponent } from './modal.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

storiesOf('Modal', module)
  .add('Basic modal component', () => ({
    moduleMetadata: {
      declarations: [ModalComponent, MenuBarComponent]
    },
    template: `<app-modal isVisible="true" title="Title">This is a fair amount of modal content.</app-modal>`
  }))
  .add('Basic modal component hidden', () => ({
    moduleMetadata: {
      declarations: [ModalComponent, MenuBarComponent]
    },
    template: `<app-modal title="Title">This is a fair amount of modal content.</app-modal>`
  }))
  .add('Modal success', () => ({
    moduleMetadata: {
      declarations: [ModalComponent, MenuBarComponent]
    },
    template: `<app-modal isVisible="true" variant="success" title="Title">This is a fair amount of modal content.</app-modal>`
  }))
  .add('Modal warning', () => ({
    moduleMetadata: {
      declarations: [ModalComponent, MenuBarComponent]
    },
    template: `<app-modal isVisible="true" variant="warning" title="Title">This is a fair amount of modal content.</app-modal>`
  }))
  .add('Modal danger', () => ({
    moduleMetadata: {
      declarations: [ModalComponent, MenuBarComponent]
    },
    template: `<app-modal isVisible="true" variant="danger" title="Title">This is a fair amount of modal content.</app-modal>`
  }))
  .add('Modal attention', () => ({
    moduleMetadata: {
      declarations: [ModalComponent, MenuBarComponent]
    },
    template: `<app-modal isVisible="true" variant="attention" title="Title">This is a fair amount of modal content.</app-modal>`
  }));
