import { App } from 'vue';
import _Statistic from './Statistic.vue';
import _Countdown from './Countdown.vue';

export type StatisticInstance = InstanceType<typeof _Statistic>;
export type CountdownInstance = InstanceType<typeof _Countdown>;
export * from './type';

const Statistic = Object.assign(_Statistic, {
  countdown: _Countdown,
  install: (app: App) => {
    app.component('Yc' + _Statistic.name, _Statistic);
    app.component('Yc' + _Countdown.name, _Countdown);
  },
});

export { _Countdown as Countdown };

export default Statistic;
