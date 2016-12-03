import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';

import { Puppy } from './puppies'
import { PUPPIES } from './mock-puppies'



@Injectable()
export class PuppiesService {
	getPuppies(): Promise<Puppy[]> {
		return Promise.resolve(PUPPIES);
	}

	getPuppy(id: number): Promise<Puppy> {
		return this.getPuppies()
			.then(puppies => puppies.find(puppy => puppy.id === id))
	}

	getPuppiesFilter(filter: string): any {
		return Promise.resolve(PUPPIES);
	}
}