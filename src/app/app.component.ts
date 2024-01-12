import { Component } from '@angular/core';
import { CouchDbService } from './couch-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private couch:CouchDbService){}
  public name=''
  public email=''
  
  post(){
    const data={
      name:this.name,
      email:this.email
    }
    this.couch.postData(data).subscribe( {
      next: (response) => {
        alert('Post Successful');
        // Additional handling of the successful response if needed
      },
      error: (error) => {
        alert('Error in Post');
        // Additional handling of the error if needed
      }
  })
  }
}
