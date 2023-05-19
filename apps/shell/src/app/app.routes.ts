import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [  
  {
    path: '',
    component: NxWelcomeComponent
 },
  {
    path: 'welcome',
    loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'welcome',
            exposedModule: './Module'
        })
        .then(m => m.EntryModule)
  },
];
