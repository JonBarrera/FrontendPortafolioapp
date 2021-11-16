import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'todolist', component: ToDoListComponent },
  { path: 'about', component: AboutComponent },
  { path:  '', redirectTo: 'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
