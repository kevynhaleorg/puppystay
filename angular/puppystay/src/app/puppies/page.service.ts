//a simple service
import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';


@Injectable()
export class PageService {
	page: string;
	selectedPuppy: string;

	pageChange$: any;
	private _pageObserver: Observer<any>;

	selectedChange$: any;
	private _selectedObserver: Observer<any>;

	constructor(private http: Http) {
		this.pageChange$ = new Observable(observer =>
			this._pageObserver = observer).share();

		this.selectedChange$ = new Observable(observer =>
			this._selectedObserver = observer).share();
	}

	setPage(page) {
		this.page = page
		this._pageObserver.next(this.page);
	}

	getPage(): string {
		return this.page
	}

	setSelected(selected: string) {
		this.selectedPuppy = selected
		this._selectedObserver.next(this.selectedPuppy);
	}

	getSelected(): string {
		return this.selectedPuppy
	}


}