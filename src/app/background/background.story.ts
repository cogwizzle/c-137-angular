import { storiesOf } from '@storybook/angular';
import { BackgroundComponent } from "./background.component";

storiesOf('Background', module)
  .add('Basic background component', () => ({
    component: BackgroundComponent,
  }))