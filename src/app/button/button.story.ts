import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';

storiesOf('Button', module)
  .add('Basic button component', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<app-button onClick="() => console.log('click')">Click me!</app-button>`
  }))
  .add('Button success', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<app-button onClick="() => console.log('click')" variant="success">Click me!</app-button>`
  }))
  .add('Button warning', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<app-button onClick="() => console.log('click')" variant="warning">Click me!</app-button>`
  }))
  .add('Button danger', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<app-button onClick="() => console.log('click')" variant="danger">Click me!</app-button>`
  }))
  .add('Button attention', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<app-button onClick="() => console.log('click')" variant="attention">Click me!</app-button>`
  }));
