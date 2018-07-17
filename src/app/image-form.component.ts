import {Component, Inject} from '@angular/core';
import {    Validators, FormBuilder} from '@angular/forms';
import {MediaItemService} from './media-item.service';
import {LOOKUP_LISTS} from './providers';
import {ActivatedRoute,Router} from '@angular/router';
import { ImageModel } from './imagemodel';
import {url_backend} from './providers';

@Component({
    selector: 'media-item-form',
    templateUrl: 'image-form.component.html',
    styleUrls: ['media-item-list.component.css']
})
export class ImageFormComponent {
    constructor(private router:Router,
        private route:ActivatedRoute,
        private med: MediaItemService){}
    imageForm:any;
    imageUrl:string="/assets/img/default_image_01-1024x1024.png";
    fileToUpload:File=null;
    handleFileInput(file:FileList){
        this.fileToUpload=file.item(0);
        var reader=new FileReader(); 
        reader.onload=(event:any)=>{
            this.imageUrl=event.target.result;
        }
        reader.readAsDataURL(this.fileToUpload);
        this.image_seted=true;
    }
    OnSubmit(imageform, title,description,image){
        if(this.model==false)
        {            
            this.newMethod(imageform,title, description);
        }
        else
        {    
            //this.med.IsValidateName(this.model.title).subscribe((data: any) => this.A1(data.u)
            //,err=>console.log(err));     
            this.A1(true);
        }
    }
    private newMethod(imageform,title: any, description: any) {
        var x = new ImageModel();
        x.title = title.value;
        x.description = description.value;
        this.med.postfile(x, this.fileToUpload).subscribe();
        //imageform.reset();
        //this.imageUrl="/assets/img/default_image_01-1024x1024.png";
        this.router.navigate([""]);
    }

    A1(check:boolean){
        if(check==true)
        {
            this.med.saveimage(this.model).subscribe(); 
            this.router.navigate([""]);
        }
    }      
    model:any;
    image_seted=false;
    ngOnInit(){
        var ty= this.route.snapshot.paramMap.get('id')
        if(ty) 
        {
            this.model=this.med.getImage(this.route.snapshot.paramMap.get('id'));            
            this.image_seted=true;
        }
        else
         this.model=false;
    }
    ty(){
        return url_backend;
    }
}
