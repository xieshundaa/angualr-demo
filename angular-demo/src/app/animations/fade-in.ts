import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// export const flyIn = trigger('flyIn', [
//   state('in', style({ transform: 'translateX(100%)' })),
//   transition('void => *', [
//     animate(100, keyframes([
//       style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
//       style({ opacity: 1, transform: 'translateX(100px)', offset: 0.3 }),
//       style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
//     ]))
//   ])
// ]);
export const fadeIn = trigger('fadeIn', [
  state('in', style({ opacity: 0, transform: 'translateX(100%)' })),
  transition('void => *', [
    animate(1000, keyframes([
      style({ opacity: 0, transform: 'translateX(100%)', offset: 0}),
      style({ opacity: 0.3, transform: 'translateX(100px)', offset: 0.3}),
      // style({ opacity: 0.8, transform: 'translateX(0)', offset: 0.6}),
      style({ opacity: 1, transform: 'translateX(0)', offset: 1.0})
    ]))
  ])
]);
