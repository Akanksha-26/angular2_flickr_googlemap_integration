import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject } from 'rxjs';
import {Subscription}   from 'rxjs/Subscription';

@Injectable()
export class getPhotosService {
 _getPhotos = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e1e653a59116c1f29dc8d4ab6ed4ed50&format=json&nojsoncallback=1";
  
  constructor( private http: Http) {   
  }
  getPhotoByLocation(marker)  {
    return this.http.get(this._getPhotos+'&lat='+marker.lat +'&lon='+marker.lng)
      .map(res=>{
        let photoArray = JSON.parse(res["_body"]).photos.photo
        let photoUrlArray = photoArray.map(photo => {
            return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"
        })
        return photoUrlArray
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? '${error.status} - ${error.statusText}' : 'Server error';
    return Observable.throw(errMsg);

  }
}