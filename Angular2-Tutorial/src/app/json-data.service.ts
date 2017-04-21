import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonDataService {

  constructor(private http: Http) { }

  fatchData(){
    return this.http.get('../assets/data/topicList.json').map(
      (res) => res.json()    
    );
  }
}
