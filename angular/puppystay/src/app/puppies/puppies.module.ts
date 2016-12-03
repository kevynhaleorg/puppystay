import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';

// Import Components
import { PuppiesHeaderComponent } from './puppies-header.component'
import { PuppiesListComponent } from './puppies-list.component'
import { PuppiesCreateComponent } from './puppies-create.component'
import { PuppiesMainComponent } from './puppies-main.component'
import { PuppiesSelectedComponent } from './puppies-selected.component'
import { PuppiesSearchComponent } from './puppies-search.component'


// Import Service
import { PuppiesService } from './puppies.service'
import { PageService } from './page.service'

@NgModule({
  imports: [
  	RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    PuppiesHeaderComponent,
    PuppiesListComponent,
    PuppiesSelectedComponent,
    PuppiesCreateComponent,
    PuppiesMainComponent,
    PuppiesSearchComponent
  ],
  providers: [ PuppiesService, PageService]
})
export class PuppiesModule {}
