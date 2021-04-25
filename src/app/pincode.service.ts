import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class model {
constructor( 
  public Name: string,
  public Discription:null,
  public BranchType:string,
  public DeliveryStatus:string,
  public Circle:string,
  public District:string,
  public Division:string,
  public Pincode:number,
){}
}
export class pincodeapi{
  private apiurl = 'https://api.postalpincode.in/pincode/{PINCODE}';
constructor(
  private http:HttpClient){}
  getData():Observable<any>{return this.http.get(this.apiurl)}
}