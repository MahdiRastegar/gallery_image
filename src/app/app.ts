import {AppComponent} from './app.component';
import {LOOKUP_LISTS, lookupLists} from './providers';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { NgModule }   from '@angular/core';
import {MediaItemListComponent} from './media-item-list.component';
import {ImageItemComponent} from './image-item.component';
import {FavoriteDirective} from './favorite.directive';
import { BrowserModule } from '@angular/platform-browser';
import { MediaItemService } from './media-item.service';
import { ImageFormComponent } from './image-form.component';
import { FormsModule } from '@angular/forms';


    @NgModule({
        declarations: [
          AppComponent,FavoriteDirective,MediaItemListComponent,ImageItemComponent,
          ImageFormComponent
        ],
        imports: [HttpClientModule,RouterModule.forRoot([
          {
            path: '', component: MediaItemListComponent
          },
          {
            path: 'add', component: ImageFormComponent
          },
          {
            path: 'edit/:id', component: ImageFormComponent
          }           
        ])
        ,BrowserModule,FormsModule
        ],
        providers: [          
          {provide:LOOKUP_LISTS,  useValue: lookupLists } ,
          
           ,MediaItemService        
        ],
        bootstrap: [ AppComponent ]
      })


export class AppModule {}