import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Map1Component } from './map1/map1.component';
import { LoadinglayerComponent } from './pages/loadinglayer/loadinglayer.component';

const routes: Routes = [
  {
    path: '',
    component: Map1Component
  },
  {
    path: 'load',
    component: LoadinglayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
