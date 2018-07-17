import {Component} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    selector: 'media-tracker-app',    
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    constructor(private router:Router){}
    search='';
    oi(){
        if(this.search==''){
            this.router.navigate(['']);
            return;
        }
        if(this.search.length>3)
        this.router.navigate(['/Search',this.search]);
    }    
}