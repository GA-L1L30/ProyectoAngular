import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CounterModule, BrowserModule, AppRoutingModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
