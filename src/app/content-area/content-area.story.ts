import { storiesOf } from '@storybook/angular';
import { ContentAreaComponent } from './content-area.component';

storiesOf('ContentArea', module)
  .add('Basic content area component', () => ({
    moduleMetadata: {
      declarations: [ContentAreaComponent]
    },
    template: `<app-content-area>This is an acceptable amount of content to test this component.</app-content-area>`
  }))
  .add('Content area success', () => ({
    moduleMetadata: {
      declarations: [ContentAreaComponent]
    },
    template: `<app-content-area variant="success">This is an acceptable amount of content to test this component.</app-content-area>`
  }))
  .add('Content area warning', () => ({
    moduleMetadata: {
      declarations: [ContentAreaComponent]
    },
    template: `<app-content-area variant="warning">This is an acceptable amount of content to test this component.</app-content-area>`
  }))
  .add('Content area danger', () => ({
    moduleMetadata: {
      declarations: [ContentAreaComponent]
    },
    template: `<app-content-area variant="danger">This is an acceptable amount of content to test this component.</app-content-area>`
  }))
  .add('Content Area attention', () => ({
    moduleMetadata: {
      declarations: [ContentAreaComponent]
    },
    template: `<app-content-area variant="attention">This is an acceptable amount of content to test this component.</app-content-area>`
  }));