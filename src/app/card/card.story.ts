import { storiesOf } from '@storybook/angular';
import { CardComponent } from './card.component';
import { ContentAreaComponent } from '../content-area/content-area.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

storiesOf('Card', module)
  .add('Basic card component', () => ({
    moduleMetadata: {
      declarations: [CardComponent, ContentAreaComponent, MenuBarComponent]
    },
    template: `<app-card title="Title">Cards</app-card>`
  }))
  .add('Card success', () => ({
    moduleMetadata: {
      declarations: [CardComponent, ContentAreaComponent, MenuBarComponent]
    },
    template: `<app-card variant="success" title="Title">Cards</app-card>`
  }))
  .add('Card warning', () => ({
    moduleMetadata: {
      declarations: [CardComponent, ContentAreaComponent, MenuBarComponent]
    },
    template: `<app-card variant="warning" title="Title">Cards</app-card>`
  }))
  .add('Card danger', () => ({
    moduleMetadata: {
      declarations: [CardComponent, ContentAreaComponent, MenuBarComponent]
    },
    template: `<app-card variant="danger" title="Title">Cards</app-card>`
  }))
  .add('Card attention', () => ({
    moduleMetadata: {
      declarations: [CardComponent, ContentAreaComponent, MenuBarComponent]
    },
    template: `<app-card variant="attention" title="Title">Cards</app-card>`
  }));
