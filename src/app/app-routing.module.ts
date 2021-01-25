import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { StudentsEditComponent } from './components/students-edit/students-edit.component';
import { StudentsViewComponent } from './components/students-view/students-view.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "students", component: StudentsViewComponent },
  { path: "student-add", component: StudentsAddComponent },
  { path: "student/:id", component: StudentsEditComponent },

  // any others links
  { path: "**", redirectTo: "/main" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
