import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
//import { CoursesComponent } from './courses/courses.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AccueilComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'our/:id',
    component: VisionComponent
  },
  /* {
    path: 'programs',
    component: CoursesComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
