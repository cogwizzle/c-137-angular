import { storiesOf } from '@storybook/angular';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

storiesOf('MenuBar', module)
  .add('Basic menu-bar component', () => ({
    moduleMetadata: {
      declarations: [MenuBarComponent]
    },
    template: `<app-menu-bar><h1>header</h1></app-menu-bar>`
  }))
  .add('MenuBar success', () => ({
    moduleMetadata: {
      declarations: [MenuBarComponent]
    },
    template: `<app-menu-bar variant="success"><h1>header</h1></app-menu-bar>`
  }))
  .add('MenuBar warning', () => ({
    moduleMetadata: {
      declarations: [MenuBarComponent]
    },
    template: `<app-menu-bar variant="warning"><h1>header</h1></app-menu-bar>`
  }))
  .add('MenuBar danger', () => ({
    moduleMetadata: {
      declarations: [MenuBarComponent]
    },
    template: `<app-menu-bar variant="danger"><h1>header</h1></app-menu-bar>`
  }))
  .add('MenuBar attention', () => ({
    moduleMetadata: {
      declarations: [MenuBarComponent]
    },
    template: `<app-menu-bar variant="attention"><h1>header</h1></app-menu-bar>`
  }))
  .add('Menubar danger invert', () => ({
    moduleMetadata: {
      declarations: [MenuBarComponent]
    },
    template: `<app-menu-bar invert variant="danger"><h1>header</h1></app-menu-bar>`
  }));
