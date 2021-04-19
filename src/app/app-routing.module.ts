import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChamisComponent } from './chamis/chamis.component';
import { DefisComponent } from './defis/defis.component';

const routes: Routes = [
  {path:"chamis",component:ChamisComponent},
  {path:"defis",component:DefisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ChamisComponent,DefisComponent];