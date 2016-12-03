import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from './page.service'
@Component({
  selector: 'puppies-main',
  templateUrl: './puppies-main.component.html',
  styleUrls: ['./puppies-main.component.scss']
})
export class PuppiesMainComponent {

  showSingle;
  subscription:any

  constructor(private pageService: PageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  	this.showSingle = this.route
  		.data
      	.subscribe(v => this.getPage(v['name']));
  }

  getPage(page) {
    this.pageService.setPage(page)
  }
}
