import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsViewComponent } from './components/students-view/students-view.component';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { StudentsEditComponent } from './components/students-edit/students-edit.component';
import { MainComponent } from './components/main/main.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsViewComponent,
    StudentsAddComponent,
    StudentsEditComponent,
    MainComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
