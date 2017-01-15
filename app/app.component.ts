import { Component } from '@angular/core';
import { getPhotosService } from './app.service';

@Component({
  selector: 'my-app',
  providers:[getPhotosService],
  templateUrl: "/app/app.html"
})
export class AppComponent  { 
  
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  images:any[]=[];
  imagesPerPage:any[]=[]
markers :any={};
isArray:boolean = false;
constructor(private getPhotosService:getPhotosService){

}
mapClicked($event){
  this.markers={
      lat: $event.coords.lat,
      lng: $event.coords.lng
    };
    this.isArray = false;
    this.getPhotos(this.markers);
    
}

  getPhotos(data){
    this.images = [];
    this.getPhotosService.getPhotoByLocation(data).subscribe(
      data=>{
        if(data.length !=0){
          this.images= data;
          this.isArray = true;
        }
        
      },
      error=>{console.log(error)}
    )
  }
loadData($event){
  console.log($event);
}
}
