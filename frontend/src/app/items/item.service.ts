import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';
import {Observable} from 'rxjs'
import { AppSettings } from 'src/appSettings';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

   BASE_URL=AppSettings.BASE_URL + "api/items";
    // to be moved to environmental variable

  constructor(private http:HttpClient) { }

  postItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.BASE_URL, item);

  }
  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.BASE_URL);
  }
  getItemById(id:string):Observable<Item>{
    return this.http.get<Item>(this.BASE_URL+'/' +id);
  }
  getMyItems(email:string):Observable<Item[]>{
    return this.http.get<Item[]>(this.BASE_URL+"/myitems/"+email);
  }
  searchItems(qParams:any, skip:any){
    // search to be implemented here

  }
  updateItem(id:string, item:Item):Observable<Item>{
    return this.http.patch<Item>(this.BASE_URL+id,item)
  }
  deleteItem(id:string):Observable<Item>{
    return this.http.delete<Item>(this.BASE_URL);

  }
  uploadImage(file:File):Observable<File>{
    const formData:FormData = new FormData();
    formData.append("imageUrl", file, file.name);
    return this.http.post<File>(this.BASE_URL+'/img', formData);
  }

}
