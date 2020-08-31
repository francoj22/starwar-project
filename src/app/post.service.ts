import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  _url: string = "https://swapi.dev/api/starships/";

  results = [] as  any;

  next: String;

  id = 1;

 subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  /*
    getStartShips will get all the startships from each page.
  */
  getStarShips(): Observable<any>  {
      if(this.id === 1) {
        this.http.get(this._url).subscribe((data : any)=> {
          this.getStarShipsBinding(data);
        });
      } else {
        this.getStarShipsByPage(this.id).subscribe((data : any)=> {
          if (data.next != null) {
            this.getStarShipsBinding(data);
          } else {
            this.results = this.results.concat(data.results);
            this.subject.next(this.results);
          }
        })
      }
      return this.subject.asObservable(); 

  }

  /**
   * will add the retrive data to the result
   */
  getStarShipsBinding(data) {
    this.next = data.next;
    this.results = this.results.concat(data.results);
    ++this.id;
    this.getStarShips();
  }

  getStarShipsByPage(id: number = 1) {
    return this.http.get(`${this._url}?page=${id}`);
  }

}
