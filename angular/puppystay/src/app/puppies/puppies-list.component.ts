import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from './page.service'

import { Puppy } from './puppies'
import { PuppiesService } from './puppies.service'

@Component({
  selector: 'puppies-list',
  templateUrl: './puppies-list.component.html',
  styleUrls: ['./puppies-list.component.scss']
})
export class PuppiesListComponent {
  page: any = false;
  coverall: boolean;
  subscription1: any;
  subscription2: any;
  subscription3: any;
  puppies: Puppy[];
  selectedPuppy: Puppy;
  selectedId:string;

  constructor(
  	private pageService: PageService, 
  	private route: ActivatedRoute,
  	private puppiesService: PuppiesService) {
  }

  

  ngOnInit() {
  	this.subscription1 = this.pageService.pageChange$.subscribe(
      page => this.setPage(page));

  	this.subscription2 = this.pageService.selectedChange$.subscribe(
      selected => this.setSelected(selected));

  	this.puppiesService.getPuppies()
      .subscribe(test => this.setPuppies())

      this.subscription3 = this.puppiesService.puppiesChange$.subscribe(
      content => this.setPuppies());

  }

  setPuppies(){
  	this.puppies = this.puppiesService.retPuppies()
  }

  setPage(page) {
  	this.page = page

  	if (this.page == 'main') {
  		document.getElementById("child-route").style.display = "none"
  		this.coverall = false;
  		this.selectedId = '';
  	}
  	else {
  		document.getElementById("child-route").style.display = "block"
  		this.coverall = true;
  	}
  }

  setSelected(selected:string) {
  	console.log(selected)
  	this.selectedId = selected
  	console.log(this.selectedId)
  }

  filterUpdate(filter: string) {
  	if (this.puppies != null) {
  	  //this.puppies = this.puppiesService.getPuppiesFilter(filter)
    }
  }

}
