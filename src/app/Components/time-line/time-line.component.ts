import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '@syncfusion/ej2-angular-grids';
import { DragAndDropEventArgs } from '@syncfusion/ej2-angular-navigations';
import {View, EventSettingsModel, CellClickEventArgs, ScheduleComponent, GroupModel} from '@syncfusion/ej2-angular-schedule'
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { BehaviorSubject } from 'rxjs';
import { DataSch } from 'src/app/Models/data';
import { Resources } from 'src/app/Models/resources';
import { ApiService } from 'src/app/Services/api.service';
@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit{
  /**
   *
   */
  constructor(public api:ApiService) {

    
  }
  public data$:any
  public subject:string=""
  public infRes?:Resources[]=[]
  public infoResources?= new BehaviorSubject <Resources[]> (this.infRes)
  public info?:any[]=[]
  

  // private eventData: DataManager= new DataManager({
  //   url:'http://190.25.51.123:9937/requieretoken/ordenesProduccion/consultarProgramacion',
  //   adaptor: new WebApiAdaptor,
  //   crossDomain:true,
  //   headers:[{Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYXJhYWRtaW4iLCJpYXQiOjE2ODMyMjg3NzAsImVzdGFkbyI6IlMiLCJBZG1pbmlzdHJhZG9yIjoiQURNSU5JU1RSQURPUiBERUwgU0lTVEVNQSAtIFNBUkEiLCJub21icmVDb25leGlvbiI6IkNvbXBlbnNhY2lvbkRTIiwibm9tYnJlUm9sIjoiQURNSU5JU1RSQURPUiBERVNDIiwiYXBsaWNhY2lvbiI6IjEiLCJsbGF2ZUVtcHJlc2EiOiJlNjNkOGI1Y2I0NDI0NjY5OWIzZWE1MmFkZjE2ZDg3YyIsImxsYXZlUm9sIjoiMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiLCJudW1lcm9FbXByZXNhIjoxLCJub21icmVFbXByZXNhIjoiQ29udHJhdGlzdGFzIHVuYWwiLCJsbGF2ZVVzdWFyaW8iOiIyNDYxMDkyODgzN2E0NzE0OTFkMzkzMDQ3MWJjY2Q2MyIsInRpcG9Mb2dpbiI6IlUiLCJhbGlhc1JvbCI6IkFETUlOSVNUUkFET1IiLCJ1c3VhcmlvIjoic2FyYWFkbWluIn0.khoFRU3wfIU5-J-q81gBNDCcYZjp_9S4lAXWZrLznvE'}]
  // });
  ngOnInit(): void { 
this.api.Get().then((val)=>{
    for (let index = 0; index < val.resourceDataSource.length; index++) {
      const objRes: Resources={
        Color:val.resourceDataSource[index].color,
        Id:val.resourceDataSource[index].id,
        Name:val.resourceDataSource[index].name,
      }
      this.infRes?.push(objRes)
      
    }
    this.infoResources.next(this.infRes)
     for (let index = 0; index < val.dataSource.length; index++) {
        const obj: DataSch={
          Id:val.dataSource[index].id,
          Subject:val.dataSource[index].subject,
          StartTime:new Date (val.dataSource[index].startTime),
          EndTime:new Date (val.dataSource[index].endTime),
          ResourceID: val.dataSource[index].resourceId,
        }
        this.info?.push(obj)
        
        
      }  
      console.log(this.info);  
   })

  }
 
  
  @ViewChild("scheduleObj")
  public scheduleInstance: ScheduleComponent
  public setView: View = 'WorkWeek';
  public setViews: View[]=["Day","Week","WorkWeek","Agenda","Month","TimelineDay","TimelineMonth","TimelineWeek","TimelineWorkWeek"]
  public setDate:Date= new Date(2023,6,18);
// public resourceDataSource:Object[]=[
//   {Name:"Edward", Id:1, Color:'#ffaa00'}
// ]

public groupData?:GroupModel={
  resources:['Resources']
}

  public eventObject: EventSettingsModel={
    dataSource:this.info
    // dataSource:[{
    //   Id:1,
    //   StartTime: new Date(2023,6,14,4,0),
    //  EndTime: new Date(2023,6,14,6,0),
    //   Subject: "TAREA",
    //   ResourceID:1
    //     }]
  }



  // public waitingList:{[key:string]:Object}[]=[
  //   {
  //     Id:1,
  //     Name:"Edward"
  //   },
  //   {Id:2,
  //     Name:"Franciso"
  //   },{
  //     Id:3,
  //     Name:"Nicolas"
  //   }
  // ];
//   public field:Object={dataSource:this.waitingList, id:"Id", text:"Name"};

//   onTreeDragStop(args: DragAndDropEventArgs):void {
// let cellData: CellClickEventArgs= this.scheduleInstance.getCellDetails(args.target);
// let eventData:{[key:string]:Object}={
// Subject:args.draggedNodeData["text"],
// StartTime:cellData.startTime,
// EndTime:cellData.endTime,
// IsAllDay:cellData.isAllDay
// }
// this.scheduleInstance.addEvent(eventData);
//   }

}
