import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FrontComponent } from './front.component';
import { PuppiesListComponent } from './puppies/puppies-list.component';
import { PuppiesMainComponent } from './puppies/puppies-main.component';
import { PuppiesSelectedComponent } from './puppies/puppies-selected.component';
import { PuppiesCreateComponent } from './puppies/puppies-create.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: FrontComponent
      },
      {
      path: 'puppies',
      children: [
        { 
          path: '', 
          component: PuppiesListComponent,
          children: [
          	{
    	       path: '', 
        	   component: PuppiesMainComponent,
        	   data: {
        	   	name: 'main'
        	   }
          	},
          	{
    	       path: 'single/:id', 
        	   component: PuppiesSelectedComponent,
        	   data: {
        	   	name: 'single'
        	   }
	       	},
	       	{
	           path: 'create', 
	           component: PuppiesCreateComponent,
        	   data: {
        	   	name: 'create'
        	   }
	       	}
          ]
        },
         
        
       	]
   	   }
   	]
   	)],
   	exports: [
    RouterModule
  	]
  })
export class AppRouterModule {}