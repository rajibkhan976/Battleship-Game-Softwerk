import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayeronepositionComponent } from './playeroneposition/playeroneposition.component';
import { PlayeroneplayComponent } from './playeroneplay/playeroneplay.component';
import { PlayertwopositionComponent } from './playertwoposition/playertwoposition.component';
import { PlayertwoplayComponent } from './playertwoplay/playertwoplay.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayeronepositionComponent,
    PlayeroneplayComponent,
    PlayertwopositionComponent,
    PlayertwoplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
