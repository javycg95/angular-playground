import { Route, Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
      path: '',
      loadChildren: () =>
      import('./entry/entry.module').then((m) => m.EntryModule),
    },
  ];
  