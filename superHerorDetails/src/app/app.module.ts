import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SuperHeroDataComponent } from './super-hero-data/super-hero-data.component';
import { PowerstatsComponent } from './powerstats/powerstats.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { BiographyComponent } from './biography/biography.component';
import { ConnectionsComponent } from './connections/connections.component';
import { WorkComponent } from './work/work.component';
import { UtilityService } from './utility.service';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroDataComponent,
    PowerstatsComponent,
    AppearanceComponent,
    BiographyComponent,
    ConnectionsComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
