import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  superHeroAllDetails;
  superHeroBiography;
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
            this.superHeroBiography = element.biography;
          }
      }
    })

  });
  }

  goToPreviousSuperHeroBiography(){
    if(this.superHeroId>1){
      let previousId = this.superHeroId-1;
      this.utilityService.setSuperHeroID(previousId);
      this.router.navigate(['/biography', previousId]);
    }
    
  }

  goToNextSuperHeroBiography(){
    let nextId = this.superHeroId+1;
    this.utilityService.setSuperHeroID(nextId);
    this.router.navigate(['/biography', nextId]);
  }

}
