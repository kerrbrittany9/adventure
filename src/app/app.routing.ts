import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScenarioOneComponent } from './scenario-one/scenario-one.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'scenario-one',
    component: ScenarioOneComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
