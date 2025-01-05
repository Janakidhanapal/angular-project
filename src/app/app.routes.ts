import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ElementsComponent} from './elements/elements.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'elements', component: ElementsComponent},
];

