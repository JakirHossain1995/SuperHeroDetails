import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperHeroDataComponent } from './super-hero-data/super-hero-data.component';
import { PowerstatsComponent } from './powerstats/powerstats.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { BiographyComponent } from './biography/biography.component';
import { ConnectionsComponent } from './connections/connections.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: "", redirectTo:"id/1", pathMatch: "full"},
  {path:"id/:idNumber", component: SuperHeroDataComponent},
  {path:"powerstats/:idNumber", component: PowerstatsComponent},
  {path:"appearance/:idNumber", component: AppearanceComponent},
  {path:"biography/:idNumber", component: BiographyComponent},
  {path:"connections/:idNumber", component: ConnectionsComponent},
  {path:"work/:idNumber", component: WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
