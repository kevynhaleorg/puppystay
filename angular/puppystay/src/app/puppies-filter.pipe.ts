import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'selected'
})
export class PuppiesFilterPipe implements PipeTransform {
 transform(value: any, args?: any): any {
   return value.filter(item => {
			for (var key in item) {
				if (key == 'name'){
					value = String(item[key])
					console.log(value)
					if (value.indexOf(args) !== -1) {
						return true
					}

				}
			}
   });
 }
};
