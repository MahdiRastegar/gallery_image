import {Component, Input, Output, EventEmitter} from '@angular/core';
import {url_backend} from './providers';

@Component({
    selector: 'image-item',    
    templateUrl: 'image-item.component.html',
    styleUrls: ['image-item.component.css']
})
export class ImageItemComponent {
    @Input('mediaItemToWatch') image;
    @Output('deleted') delete = new EventEmitter();
    @Output('edited') edit = new EventEmitter();
    ty(){
        return url_backend;
    }

    onDelete() {
        this.delete.emit(this.image);
    }
    onEdit() {
        this.edit.emit(this.image);
    }    
}