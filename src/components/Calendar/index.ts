import { App } from 'vue';
import _Calendar from './Calendar.vue';

export type CalendarInstance = InstanceType<typeof _Calendar>;
export * from './type';

const Calendar = Object.assign(_Calendar, {
  install: (app: App) => {
    app.component('Yc' + _Calendar.name, _Calendar);
  },
});

declare module 'vue' {
  interface GlobalComponents {
    YcCalendar: typeof Calendar;
  }
}

export default Calendar;
