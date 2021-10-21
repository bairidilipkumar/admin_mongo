import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudCreateComponent } from './stud-create/stud-create.component';
import { StudUpdateComponent } from './stud-update/stud-update.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

import { StudListComponent } from './stud-list/stud-list.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    StudCreateComponent,
    
    StudUpdateComponent,
   
    SidebarComponent,
    TopbarComponent,
    StudListComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
