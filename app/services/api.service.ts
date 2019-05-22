import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class APIService {

  tmp:{};
  API_URL:string = "http://localhost:54619/api/";
  constructor(private http:HttpClient) { }
   GetDataAPI(){
    const header = {'content-type':'application/json'}
     return this.http.get(this.API_URL+"Student",{headers:header});
   }
   SaveData(t_grade){console.log("rel  ="+t_grade.g_grade)
     return this.http.post(this.API_URL+"Student",t_grade);
   }

   DelData(id){
     console.log("del ="+id);
    return this.http.delete(this.API_URL+"Student/"+id);
   }
   Update(todo){
    const header = {'content-type':'app"lication/json'}
    return this.http.put(this.API_URL+"Student",todo);

  }
}
