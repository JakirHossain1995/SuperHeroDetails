import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private utilityService: UtilityService, private router: Router){
    

  }
  superHeroId;

ngOnInit(){

}

onClickHeroDetails(){
  this.superHeroId = this.utilityService.getSuperHeroId();
  this.router.navigate(['/id', this.superHeroId]);
}

onClickPowerstats(){
  this.superHeroId = this.utilityService.getSuperHeroId();
  this.router.navigate(['/powerstats', this.superHeroId]);
}

onClickAppearance(){
  this.superHeroId = this.utilityService.getSuperHeroId();
  this.router.navigate(['/appearance', this.superHeroId]);
}

onClickBiography(){
  this.superHeroId = this.utilityService.getSuperHeroId();
  this.router.navigate(['/biography', this.superHeroId]);
}

onClickHeroConnections(){
  this.superHeroId = this.utilityService.getSuperHeroId();
  this.router.navigate(['/connections', this.superHeroId]);
}

onClickHeroWork(){
  this.superHeroId = this.utilityService.getSuperHeroId();
  this.router.navigate(['/work', this.superHeroId]);
}


}

