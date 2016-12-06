import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from './page.service'

import { Puppy } from './puppies'
import { PuppiesService } from './puppies.service'

@Component({
  selector: 'puppies-create',
  templateUrl: './puppies-create.component.html',
  styleUrls: ['./puppies-create.component.scss']
})
export class PuppiesCreateComponent {

  showSingle;
  subscription:any
  puppy: Puppy = new Puppy;

  constructor(
   private pageService: PageService,
   private route: ActivatedRoute, 
   private router: Router,
   private puppiesService: PuppiesService) {
  }

  ngOnInit() {
  	this.showSingle = this.route
  		.data
      	.subscribe(v => this.getPage(v['name']));
  }

  getPage(page) {
    this.pageService.setPage(page)
  }

  onSubmit() {
  	this.puppiesService.createPuppy(this.puppy)
  		.subscribe(test => this.newPuppy())
  }

  newPuppy() {
  	this.router.navigate(['/puppies'])
  }
}