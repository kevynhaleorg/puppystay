import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  subscription:any;
  subscription2:any;
  puppy: Puppy = new Puppy;
  id: string;
  edit:boolean = false;

  constructor(
  	private pageService: PageService, 
  	private route: ActivatedRoute,
  	private puppiesService: PuppiesService,
  	private router: Router) {
  }

  ngOnInit() {
  	

    this.subscription = this.route.params.subscribe(params => {
    	this.id = String(params['id'])
    	this.puppiesService.getPuppy(this.id)
    		.subscribe(test => this.setPuppy())
    	this.pageService.setSelected(this.id); 

    })

    this.showSingle = this.route
  		.data
      	.subscribe(v => this.getPage(v['name']));

    this.subscription2 = this.puppiesService.puppyChange$.subscribe(
      puppy => this.setPuppy());
    

  }

  getPage(page: number): void {
    this.pageService.setPage(page);
  }

  setPuppy(){
  	this.puppy = this.puppiesService.retPuppy()
  	console.log(this.puppy)
  }
  deletePuppy(id:string){
  	console.log(id)
  	this.puppiesService.deletePuppy(id)
  	.subscribe(test => this.retDelete())
  }
  retDelete() {
  	console.log('deleted')
  	this.router.navigate(['/puppies'])
  }

}