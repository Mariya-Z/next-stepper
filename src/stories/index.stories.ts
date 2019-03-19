import {storiesOf, moduleMetadata} from '@storybook/angular';

import {NextStepperComponent} from '../../projects/next-stepper/src/public_api';

const styles = `
  <style>
  </style>
`;

storiesOf('Next stepper', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NextStepperComponent],
    }),
  )
  .add(
    'Install',
    () => ({
      template: `
      ${styles}
      <next-stepper
        [firstStep]="'firstStep'"
        [secondStep]="'secondStep'"
        [thirdStep]="'thirdStep'"
      ></next-stepper>
    `,
      props: {
        text: 'Go to Welcome Story',
      },
    }),
    {notes: 'note'},
  );
