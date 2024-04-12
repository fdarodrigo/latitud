import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LoadinglayerComponent } from './pages/loadinglayer/loadinglayer.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent
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
