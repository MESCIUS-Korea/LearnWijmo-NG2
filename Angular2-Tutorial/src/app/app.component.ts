import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { JsonDataService } from './json-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonDataService]
})
export class AppComponent {

 constructor(private router: Router, private jsonDataService: JsonDataService) { }

  toc = [];

  onSelect(url: string) {
      console.log(url);
    this.router.navigate([url]);
  }

  ngOnInit(){
      this.jsonDataService.fatchData().subscribe(
        (data) => this.toc = data
      );
  }

  



}
