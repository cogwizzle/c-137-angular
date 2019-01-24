import { storiesOf } from '@storybook/angular';
import { BackgroundComponent } from "./background.component";

storiesOf('Background', module)
  .add('Basic background component', () => ({
    component: BackgroundComponent,
  }))
  .add('Background success', () => ({
    component: BackgroundComponent,
    props: {
      variant: 'success',
    }
  }))
  .add('Background warning', () => ({
    component: BackgroundComponent,
    props: {
      variant: 'warning',
    }
  }))
  .add('Background danger', () => ({
    component: BackgroundComponent,
    props: {
      variant: 'danger',
    }
  }))
  .add('Background attention', () => ({
    component: BackgroundComponent,
    props: {
      variant: 'attention',
    }
  }));
