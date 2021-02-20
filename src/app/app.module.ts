import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompService } from './comp.service';

@NgModule({
  declarations: [
    AppComponent,
    CompaComponent,
    CompbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [CompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
