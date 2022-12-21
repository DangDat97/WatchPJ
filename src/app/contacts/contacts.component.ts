import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient){
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?','callback')
    .pipe(
      map(() => true),
      catchError(() => of (false)),
    );
  }

}
