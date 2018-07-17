import { Injectable } from '@angular/core';
import {Http,Response, URLSearchParams, Headers} from '@angular/http';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import { concat, Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { ImageModel } from './imagemodel';

@Injectable()
export class MediaItemService {
        constructor(private http: HttpClient) {}
        
        getFile():Observable<any> {    
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });         
            return this.http.get('http://localhost:52793/api/GetImages');
            
        }
        GetTotalCount():Observable<any> {    
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });  
            return this.http.get('http://localhost:52793/api/GetTotal');            
        }
        GetTotalCount_S(_searched):Observable<any> {    
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });  
            return this.http.get('http://localhost:52793/api/GetTotal_S/'+_searched);            
        }
        GetImagesRanged(_skip:number,_take:number):Observable<any> {    
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });         
            
            const formData:FormData=new FormData();
            const endPoint:string= 'http://localhost:52793/api/GetImagesRanged';
            formData.append("Item",JSON.stringify({skip:_skip,take:_take}));
            return this.http.post(endPoint,formData);
            
        }
        GetImagesRanged_S(_skip:number,_take:number,_searched):Observable<any> {    
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });         
            
            const formData:FormData=new FormData();
            const endPoint:string= 'http://localhost:52793/api/GetImagesRanged_S';
            formData.append("Item",JSON.stringify({skip:_skip,take:_take,searched:_searched}));
            return this.http.post(endPoint,formData);
            
        }
        getImage(id):ImageModel {    
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });  
            var im= new ImageModel;       
            this.http.get('http://localhost:52793/api/EditI/'+id).subscribe((data: any) => {im.id = data.Id,
            im.name = data.Name,im.title = data.Title,im.description = data.Description}
            ,err=>console.log(err));  
            return im
        }
        /*IsValidateName(name):Observable<any> {    
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });  
            return this.http.get('http://localhost:52793/apiIV/'+name);            
        }*/
        Init() {   
            
        }
        postfile(item:ImageModel,fileToUpload:File){
            const formData:FormData=new FormData();
            const endPoint:string= 'http://localhost:52793/api/AddI';
            formData.append("Image",fileToUpload,fileToUpload.name);
            formData.append("Item",JSON.stringify(item));            
            return this.http.post(endPoint,formData);
        }
        saveimage(item:ImageModel){
            const formData:FormData=new FormData();
            const endPoint:string= 'http://localhost:52793/api/SaveI/'+item.id;
            formData.append("Item",JSON.stringify(item));            
            return this.http.post(endPoint,formData);
        }
        deleteimage(id){
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });  
                   
            return this.http.delete('http://localhost:52793/api/deleteI/'+id);       
        }
}