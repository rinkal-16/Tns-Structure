import {Routes} from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'browser',
    loadChildren: () => import('../../browse/browse.module').then((m) => m.BrowseModule),
  },
  {
    path: 'splash-one',
    loadChildren: () => import('../../SplashScreens/splashOne/splash-one.module').then((m) => m.SplashOneModule),
  },
  {
    path: 'splash-two',
    loadChildren: () => import('../../SplashScreens/splashTwo/splash-two.module').then((m) => m.SplashTwoModule),
  },

];
