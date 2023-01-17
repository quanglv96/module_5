import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBaComponent } from './progress-ba/progress-ba.component';
import { IRatingUnitComponent } from './irating-unit/irating-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBaComponent,
    IRatingUnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
