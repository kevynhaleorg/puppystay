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
  subscription: any;
  puppies: Puppy[];
  selectedPuppy: Puppy;
  selectedId:number;

  constructor(
  	private pageService: PageService, 
  	private route: ActivatedRoute,
  	private puppiesService: PuppiesService) {
  }

  getPuppies(): void {
  	this.puppiesService.getPuppies().then(puppies => this.puppies = puppies);
  }

  ngOnInit() {
  	this.subscription = this.pageService.pageChange$.subscribe(
      page => this.setPage(page));

  	this.subscription = this.pageService.selectedChange$.subscribe(
      selected => this.setSelected(selected));

  	this.getPuppies()

  }

  setPage(page) {
  	this.page = page

  	if (this.page == 'main') {
  		document.getElementById("child-route").style.display = "none"
  		this.coverall = false;
  		this.selectedId = 0;
  	}
  	else {
  		document.getElementById("child-route").style.display = "block"
  		this.coverall = true;
  	}
  }

  setSelected(selected:number) {
  	this.selectedId = selected
  	console.log(this.selectedId)
  }

  filterUpdate(filter: string) {
  	if (this.puppies != null) {
  	  this.puppies = this.puppiesService.getPuppiesFilter(filter)
    }
  }

}
