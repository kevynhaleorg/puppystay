import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Observer} from 'rxjs/Observer';

import { Puppy } from './puppies'
import { PUPPIES } from './mock-puppies'



@Injectable()
export class PuppiesService {
	puppy: Puppy;
	puppies: Puppy[];

	puppiesChange$: any;
	private _puppiesObserver: Observer<any>;

	puppyChange$: any;
	private _puppyObserver: Observer<any>;

	constructor(private http: Http) {
		this.puppiesChange$ = new Observable(observer =>
		this._puppiesObserver = observer).share();

		this.puppyChange$ = new Observable(observer =>
		this._puppyObserver = observer).share();
	}

	getPuppies(): Observable<any> {
		let url =  "http://puppystay.kydeveloper.com:8123/api/puppies"
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.get(url, options)
			.map(response => this.setPuppies(response.json()))
	}
	setPuppies(puppies) {
		this.puppies = puppies
		this._puppiesObserver.next(this.puppies);
	}
	retPuppies() {
		return this.puppies;
	}

	getPuppy(id: string): Observable<any> {
		console.log(id)
		let url = "http://puppystay.kydeveloper.com:8123/api/puppies/" + id
	    let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })		
		console.log(options)	
		return this.http.get(url, options)
			.map(response => this.setPuppy(response.json()))
	}
	setPuppy(puppy) {
		console.log(puppy)
		this.puppy = puppy
		this._puppyObserver.next(this.puppy)
	}
	retPuppy() {
		return this.puppy;
	}


	deletePuppy(id) {
		let url = "http://puppystay.kydeveloper.com:8123/api/puppies/" + id
	    let headers    = new Headers({'Content-Type': 'application/json'})
	    let options    = new RequestOptions({ headers: headers })	

	    return this.http.delete(url, options)
	                .map(response => this.getPuppies()
	                		.subscribe()
	                	)
	}
	createPuppy(puppy:Puppy) {
		let url =  "http://puppystay.kydeveloper.com:8123/api/puppies"
		let bodyString = JSON.stringify(puppy);
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.post(url, bodyString, options)
			.map(response => this.getPuppies()
	                		.subscribe()
	                	)
	}
	updatePuppy(puppy:Puppy) {
		let url =  "http://puppystay.kydeveloper.com:8123/api/puppies/" + puppy.id
		let bodyString = JSON.stringify(puppy);
		let headers    = new Headers({'Content-Type': 'application/json'})
		let options    = new RequestOptions({ headers: headers })			
		return this.http.post(url, bodyString, options)
			.map(response => this.getPuppies()
	                		.subscribe()
	                	)
	}

	getPuppiesFilter(filter: string) {

	}
}