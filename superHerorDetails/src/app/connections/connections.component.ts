import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  superHeroAllDetails;
  superHeroConnections;
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
            this.superHeroConnections = element.connections;
          }
      }
    })
  });
  }

  goToPreviousSuperHeroConnections(){
    if(this.superHeroId>1){
      let previousId = this.superHeroId-1;
      this.utilityService.setSuperHeroID(previousId);
      this.router.navigate(['/connections', previousId]);
    }
    
  }

  goToNextSuperHeroConnections(){
    let nextId = this.superHeroId+1;
    this.utilityService.setSuperHeroID(nextId);
    this.router.navigate(['/connections', nextId]);
  }

}
