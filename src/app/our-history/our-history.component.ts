import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs';
@Component({
  selector: 'app-our-history',
  templateUrl: './our-history.component.html',
  styleUrls: ['./our-history.component.css']
})
export class OurHistoryComponent {
  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient){
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?','callback')
    .pipe(
      map(() => true),
      catchError(() => of (false)),
    );
  }


}
