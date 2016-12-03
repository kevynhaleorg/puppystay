import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from './page.service'
@Component({
  selector: 'puppies-create',
  templateUrl: './puppies-create.component.html',
  styleUrls: ['./puppies-create.component.scss']
})
export class PuppiesCreateComponent {

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