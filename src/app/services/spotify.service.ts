import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import { map } from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify service is ready.')
  }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json',
      "Authorization": 'Bearer BQAY7cV_gUe6gj7X2axxjhTeL93ZM7HvQdCrl-L5F248RUInqh_mPTubnU30l5bUVxi3oSGCSfD4I-IFERY'
    })
  }

  getNewReleases(){
     return this.http.get(`${apiUrl}/browse/new-releases`, this.httpOptions )
                .pipe ( map ( data => {
                  return data['albums'].items;
                }));
  }




}