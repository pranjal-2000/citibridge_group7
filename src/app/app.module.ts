import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatButtonModule } from '@angular/material/button';
//import {MaterialExampleModule} from '../material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MatTableModule } from '@angular/material/table';
import { LoginpageComponent } from './loginpage/loginpage.component'  

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginpageComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatNativeDateModule,
    //MaterialExampleModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
