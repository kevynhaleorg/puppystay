import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'puppies-search',
  templateUrl: './puppies-search.component.html',
  styleUrls: ['./puppies-search.component.scss']
})
export class PuppiesSearchComponent {
	@Output() update = new EventEmitter();

	ngOnInit(){
		this.update.emit('')
	}

}
