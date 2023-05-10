import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {landingRoute} from "./shared/util/constants/router.constants";
import {LandingComponent} from "./blocks/landing/landing.component";

const routes: Routes = [
  {path: landingRoute, component: LandingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
