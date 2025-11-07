import { App } from 'vue';
import _Step from './Step.vue';
import _Steps from './Steps.vue';

export type StepInstance = InstanceType<typeof _Step>;
export type StepsInstance = InstanceType<typeof _Steps>;
export * from './type';

const Steps = Object.assign(_Steps, {
  step: _Step,
  install: (app: App) => {
    app.component('Yc' + _Step.name, _Step);
    app.component('Yc' + _Steps.name, _Steps);
  },
});

export { _Step as Step };

export default Steps;
