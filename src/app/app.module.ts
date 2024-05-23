import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { HomeComponent } from './home/home.component';
import { WordService } from './word.service';

@NgModule({
  declarations: [AppComponent, WordComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [WordService, provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
