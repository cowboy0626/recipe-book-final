import { RECIPE_ROUTES } from './recipes/recipes.routes';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppintListComponent } from './shoppint-list/shoppint-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'shopping-list', component: ShoppintListComponent }
];

export const AppRouting = RouterModule.forRoot(routes);