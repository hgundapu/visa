import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TierMenuToggleComponent } from './tier-menu-toggle/tier-menu-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TierMenuToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
