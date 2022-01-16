import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.css']
})
export class AppearanceComponent implements OnInit {
  superHeroAllDetails;
  superHeroAprearanceDetails;
  superHeroId;
  constructor(private utilityService: UtilityService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.utilityService.getSuperHerorDetailsFromAPI().subscribe(response=>{
      this.superHeroAllDetails = response;
      this.activatedRoute.params.subscribe(data=>{
      this.superHeroId = Number(data.idNumber);
      this.utilityService.setSuperHeroID(this.superHeroId);
      for(let element of this.superHeroAllDetails){
          if(element.id == this.superHeroId){
            this.superHeroAprearanceDetails = element.appearance;
          }
      }
    })
  });
  }

  goToPreviousSuperHeroAppearance(){
    if(this.superHeroId>1){
      let previousId = this.superHeroId-1;
      this.utilityService.setSuperHeroID(previousId);
      this.router.navigate(['/appearance', previousId]);
    }
    
  }

  goToNextSuperHeroAppearance(){
    let nextId = this.superHeroId+1;
    this.utilityService.setSuperHeroID(nextId);
    this.router.navigate(['/appearance', nextId]);
  }

}
