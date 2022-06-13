import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApisharedService {

  constructor(private httpclient : HttpClient) {}

getInformation(){
  let url= 'https://reqres.in/api/users?page=1';
  this.httpclient.get(url);
}

}
