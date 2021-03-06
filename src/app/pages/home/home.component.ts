import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor( private spotifyService: SpotifyService) {

    this.spotifyService.getNewReleases()
    .subscribe( (data:any) =>{
      console.log(data);
      this.newReleases = data;
    });

    /*this.spotifyService.getArtist('id')
    .subscribe((data:any) =>{
      console.log(data);
    });*/







   }

   

  ngOnInit(): void {
  }

}
