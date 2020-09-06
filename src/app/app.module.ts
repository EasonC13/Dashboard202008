import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, Routes } from "@angular/router"
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from "@angular/forms";
import { UserFilterPipe } from './user-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
