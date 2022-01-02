import {Routes} from '@angular/router';
import {NSEmptyOutletComponent} from "@nativescript/angular";

export const Full_ROUTES: Routes = [
  {
    path: 'home',
    outlet: 'homeTab',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('../../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'browse',
    outlet: 'browseTab',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('../../browse/browse.module').then((m) => m.BrowseModule),
  },
  {
    path: 'search',
    outlet: 'searchTab',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('../../search/search.module').then((m) => m.SearchModule),
  }
];

