import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public authtoken:string="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYXJhYWRtaW4iLCJpYXQiOjE2ODMyMjg3NzAsImVzdGFkbyI6IlMiLCJBZG1pbmlzdHJhZG9yIjoiQURNSU5JU1RSQURPUiBERUwgU0lTVEVNQSAtIFNBUkEiLCJub21icmVDb25leGlvbiI6IkNvbXBlbnNhY2lvbkRTIiwibm9tYnJlUm9sIjoiQURNSU5JU1RSQURPUiBERVNDIiwiYXBsaWNhY2lvbiI6IjEiLCJsbGF2ZUVtcHJlc2EiOiJlNjNkOGI1Y2I0NDI0NjY5OWIzZWE1MmFkZjE2ZDg3YyIsImxsYXZlUm9sIjoiMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiLCJudW1lcm9FbXByZXNhIjoxLCJub21icmVFbXByZXNhIjoiQ29udHJhdGlzdGFzIHVuYWwiLCJsbGF2ZVVzdWFyaW8iOiIyNDYxMDkyODgzN2E0NzE0OTFkMzkzMDQ3MWJjY2Q2MyIsInRpcG9Mb2dpbiI6IlUiLCJhbGlhc1JvbCI6IkFETUlOSVNUUkFET1IiLCJ1c3VhcmlvIjoic2FyYWFkbWluIn0.khoFRU3wfIU5-J-q81gBNDCcYZjp_9S4lAXWZrLznvE"

  constructor(public http:HttpClient) { }

public  async Get(){
  var response:any
  await this.http.get('http://190.25.51.123:9937/requieretoken/ordenesProduccion/consultarProgramacion', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.authtoken
      }
    }).toPromise().then((res)=>{
    response=res
    console.log(res);
    
    })
   return response
}

  
}
