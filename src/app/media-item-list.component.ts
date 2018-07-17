import {Component,OnInit} from '@angular/core';
import {CategoryListPipe} from './category-list.pipe';
import { MediaItemService } from './media-item.service';
import {url_backend} from './providers';


import {ActivatedRoute,Router} from '@angular/router';
import { skip } from '../../node_modules/rxjs/operators';


@Component({
    selector: 'media-item-list',     
    providers: [CategoryListPipe],
    templateUrl: 'media-item-list.component.html',
    styleUrls: ['media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
    constructor(private med: MediaItemService
    ,private router:Router,private route:ActivatedRoute) {
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function(){
           return false;
        }   
   
   }
    username:string;
    a:number=1;b:number=2;c:number=3;
    current={index:1,key:"a"};
    SetCurrent(str:string){
        document.getElementById(this.current.key).setAttribute("class","page-item");
        document.getElementById(str).setAttribute("class","page-item active");
        this.current.key=str;
        switch(str)
        {
            case"a":
            this.current.index=this.a;
            break;
            case"b":
            this.current.index=this.b;
            break;
            case"c":
            this.current.index=this.c;
            break;
        }
        // if(this.current.index>1)
        //     document.getElementById("Previous").setAttribute("class","page-item");
        // else
        //     document.getElementById("Previous").setAttribute("class","page-item disabled");
        this.GetImagesRanged((this.current.index-1)*9,9);
        if(this.current.index>1)
            document.getElementById("Previous").setAttribute("class","page-item");
        else
            document.getElementById("Previous").setAttribute("class","page-item disabled");
        
        if(this.a==1)
        {    
            document.getElementById("Previous").setAttribute("class","page-item disabled");
        }
    }    
    Next(){
        this.a++;
        this.b++;
        this.c++;
        this.current.index++;
        var str;
        switch(this.current.index)
        {
            case this.a:
            str="a";
            break;
            case this.b:
            str="b";
            break;
            case this.c:
            str="c";
            break;
        }
        this.SetCurrent(str);
        this.PreparePaging();
        document.getElementById(str).setAttribute("class","page-item active");
    }
    Previous(){
        if(this.a>1)
        {
            this.a--;
            this.b--;
            this.c--;
        }
        document.getElementById("Next").setAttribute("class","page-item");
        
        this.current.index--;
        var str;
        switch(this.current.index)
        {
            case this.a:
            str="a";
            break;
            case this.b:
            str="b";
            break;
            case this.c:
            str="c";
            break;
        }
        this.SetCurrent(str);
        this.PreparePaging();
        document.getElementById(str).setAttribute("class","page-item active");      
    }
    imageUrl:string="/assets/img/default_image_01-1024x1024.png";
    fileToUpload:File=null;
    Total:number;tN_P:number;
    Searched='';
    ngOnInit()
        {            
            var sea= this.route.snapshot.paramMap.get('search')
            //this.med.Init();    
            if(sea==null)    
            {    
                this.Searched='';
                this.GetImagesRanged(0,9);
                this.med.GetTotalCount().subscribe((data:any)=>this.SetTotal(data.value));
            }
            else
            {
                this.Searched=sea;
                this.GetImagesRanged(0,9);
                this.med.GetTotalCount_S(this.Searched).subscribe((data:any)=>this.SetTotal(data.value));
            }
        }
    SetTotal(tot){
        this.Total=tot;
        this.tN_P=Math.ceil(tot/9);
        this.PreparePaging();
        document.getElementById("a").setAttribute("class","page-item active");
    }
    PreparePaging(){
        switch(this.tN_P)
        {
            case this.a:
            document.getElementById("a").setAttribute("class","page-item");
            document.getElementById("b").setAttribute("class","page-item disabled");
            document.getElementById("c").setAttribute("class","page-item disabled");
            document.getElementById("Next").setAttribute("class","page-item disabled");
            break;
            case this.b:
            document.getElementById("a").setAttribute("class","page-item");
            document.getElementById("b").setAttribute("class","page-item");
            document.getElementById("c").setAttribute("class","page-item disabled");
            document.getElementById("Next").setAttribute("class","page-item disabled");
            break;
            default:
            document.getElementById("a").setAttribute("class","page-item");
            document.getElementById("b").setAttribute("class","page-item");
            document.getElementById("c").setAttribute("class","page-item");
            document.getElementById("Next").setAttribute("class","page-item disabled");
            break;
        }        
    }

    onMediaItemEdited(image){
        this.router.navigate(['/edit',image.Id]);
    }
    deleted_count:number=0;
    onMediaItemDeleted(image){
        this.med.deleteimage(image.Id).subscribe(er=>{var entity= this.images.find(imag=>imag.Id===image.Id);
        this.images.splice(this.images.indexOf(entity),1);
        this.deleted_count++;
        if(this.tN_P!=Math.ceil((this.Total-this.deleted_count)/9))
        {
            this.a=1;this.b=2;this.c=3;
            this.ngOnInit();
            this.RefreshPage_B();
        }});
        
    }
    images:any[]
    private RefreshPage_B() {
        this.current = { index: 1, key: "a" };
        this.SetCurrent("a");
         document.getElementById("Next").setAttribute("class", "page-item disabled");
         document.getElementById("b").setAttribute("class", "page-item disabled");
         document.getElementById("c").setAttribute("class", "page-item disabled");
        this.deleted_count = 0;
    }

    yr2(){   
        //alert(this.username);
        //var x:any;
        this.med.getFile().subscribe((data: any[]) => this.images=data
        ,err=>console.log(err));
                   
    }
    GetImagesRanged(skip,take){   
        //alert(this.username);
        //var x:any;
        if(this.Searched=='')
        this.med.GetImagesRanged(skip,take).subscribe((data: any[]) => this.images=data
        ,err=>console.log(err));
        else
        this.med.GetImagesRanged_S(skip,take,this.Searched).subscribe((data: any[]) => this.images=data
        ,err=>console.log(err));
                   
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

    