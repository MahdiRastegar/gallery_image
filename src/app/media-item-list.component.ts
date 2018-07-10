import {Component,OnInit} from '@angular/core';
import {CategoryListPipe} from './category-list.pipe';
import { MediaItemService } from './media-item.service';
import {url_backend} from './providers';


import {ActivatedRoute,Router} from '@angular/router';


@Component({
    selector: 'media-item-list',     
    providers: [CategoryListPipe],
    templateUrl: 'media-item-list.component.html',
    styleUrls: ['media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
    constructor(private med: MediaItemService
    ,private router:Router) {}
    username:string;
    imageUrl:string="/assets/img/default_image_01-1024x1024.png";
    fileToUpload:File=null;
    ngOnInit()
        {            
            //this.med.Init();            
            this.yr2();
        }
    
    onMediaItemEdited(image){
        this.router.navigate(['/edit',image.Id]);
    }
    onMediaItemDeleted(image){
        this.med.deleteimage(image.Id).subscribe();
        var entity= this.images.find(imag=>imag.Id===image.Id);
        this.images.splice(this.images.indexOf(entity),1);
    }
    images:any[]
    yr2(){   
        //alert(this.username);
        //var x:any;
        this.med.getFile().subscribe((data: any[]) => this.images=data
        ,err=>console.log(err));
                   
    }
    BiuldImages(data:any[]){
        data.forEach(element => {            
        var div1 = document.createElement("div");
        div1.setAttribute("class","col-sm-6 col-md-4");
        var div2 = document.createElement("div");
        div2.setAttribute("class","thumbnail");
        div1.appendChild(div2);
        var a1 = document.createElement("a");
        a1.setAttribute("class","lightbox");
        a1.setAttribute("href",url_backend+element.Name);
        div2.appendChild(a1);
        var img1 = document.createElement("IMG");        
        img1.setAttribute("class","img-fluid");
        //img1.setAttribute("style","width: 290px;height: 220px");
        img1.setAttribute("src",url_backend+element.Name);
        a1.appendChild(img1);
        var div3 = document.createElement("div");
        div3.setAttribute("class","caption");
        div2.appendChild(div3);
        div3.innerHTML="<h3>"+element.Title+"</h3>"+
        " <p>"+element.Description+"</p> ";
        var btn=document.createElement("button");
        div2.appendChild(btn);
        btn.setAttribute("class","btn btn-info");
        btn.addEventListener("click",this.yut) ;
        btn.innerHTML="Edit";

        var sp2= document.getElementById("container1");
        sp2.parentNode.insertBefore(div1, sp2);
        });
    }    
    
    yut(){
        this.router.navigate(['/edit']);
    }

    func1(){   
        if(this.imageUrl)     
        {
        var div1 = document.createElement("div");
        var img1 = document.createElement("IMG");        
        img1.setAttribute("style","width: 250px;height: 200px");
        img1.setAttribute("src",this.imageUrl);
        div1.appendChild(img1);
        var sp2= document.getElementById("qwe");
        sp2.parentNode.insertBefore(div1, sp2);
        }
    }
}

    