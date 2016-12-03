import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from './page.service'

import { Puppy } from './puppies'
import { PuppiesService } from './puppies.service'

@Component({
  selector: 'puppies-selected',
  templateUrl: './puppies-selected.component.html',
  styleUrls: ['./puppies-selected.component.scss']
})
export class PuppiesSelectedComponent {

  showSingle;
  selected: number;
  subscription:any;
  puppy: Puppy;

  constructor(
  	private pageService: PageService, 
  	private route: ActivatedRoute,
  	private puppiesService: PuppiesService) {
  }

  ngOnInit() {
  	this.showSingle = this.route
  		.data
      	.subscribe(v => this.getPage(v['name']));

    this.subscription = this.route.params.subscribe(params => {

    	this.getPuppy(+params['id'])
    	this.getSelected(+params['id'])

    })
    

  }

  getPage(page: number): void {
    this.pageService.setPage(page);
  }

  getPuppy(id: number): void {
  	this.puppiesService.getPuppy(id).then(puppy => this.puppy = puppy);
  }
  getSelected(id: number): void {
  	this.pageService.setSelected(id); 	
  }


}