import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WavesurferComponent } from './wavesurfer/wavesurfer.component';

const routes: Routes = [
  { path: 'wavesurfer', component: WavesurferComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'wavesurfer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
