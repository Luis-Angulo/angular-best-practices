import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

// Lazy loading is done using the router. Anything lazy-loaded must be its own module.
// modules are loaded dynamically by the router when the route segment is activated
export const appRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  // on angular 7 and above, the syntax for loadChildren is different
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule' },
];
