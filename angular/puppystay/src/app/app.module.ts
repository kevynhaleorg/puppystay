import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRouterModule } from './app-routing.module';

// Import Components
import { AppComponent } from './app.component';
import { FrontComponent } from './front.component';

// Import Modules
import { PuppiesModule } from './puppies/puppies.module'

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    PuppiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
