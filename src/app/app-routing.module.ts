import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path:'dash',
    component:DashboardComponent, 
    children: [
      { path: 'home', component: HomeComponent },
      {path: 'blog', component: BlogComponent },
      {path: 'create', component: AddComponent },
  ]
  
  },
  {
    path:'',
    component:DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
