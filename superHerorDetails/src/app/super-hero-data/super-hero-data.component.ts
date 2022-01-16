import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-super-hero-data',
  templateUrl: './super-hero-data.component.html',
  styleUrls: ['./super-hero-data.component.css']
})
export class SuperHeroDataComponent implements OnInit {
  superHeroAllDetails;
  superHeroDetails;
  superHeroId;
  constructor(private utilityService: UtilityService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.utilityService.getSuperHerorDetailsFromAPI().subscribe(response=>{
      this.superHeroAllDetails = response;
      this.activatedRoute.params.subscribe(data=>{
        this.superHeroId = Number(data.idNumber);
        this.utilityService.setSuperHeroID(this.superHeroId);

        // Fetching the selected superhero details
        for(let element of this.superHeroAllDetails){
            if(element.id == this.superHeroId){
              this.superHeroDetails = element;
            }
        }
        
      })
    
    });
  }

  goToPreviousSuperHeroDetails(){
    if(this.superHeroId>1){
      let previousId = this.superHeroId-1;
      this.utilityService.setSuperHeroID(previousId)
      this.router.navigate(['/id', previousId]);
    }
  }

  goToNextSuperHeroDetails(){
    let nextId = this.superHeroId+1;
    this.utilityService.setSuperHeroID(nextId)
    this.router.navigate(['/id', nextId]);
  }

}
