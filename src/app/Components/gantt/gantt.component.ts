import { Component, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { FormControl } from '@angular/forms';
import { editingResources, projectNewData } from 'src/data';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css']
})
export class GanttsComponent {
  public resources: object[] = editingResources;
  public resourceFields: object = {
    id: "resourceId",
    name: "resourceName"
  }
  public selectedDate: string="Week" ;
  public timelineSettings: object={timelineViewMode:this.selectedDate};
  @ViewChild("ganttObject")
  public ganttObject:GanttComponent | undefined;
  public tooltipSettings: object;

  timeList: string[] = ['Day', 'Week', 'Month', 'Year'];
  title = 'my-angular-project';


  public data: object[] = projectNewData;
  public editOptions: object = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    mode: "Auto"
  }
  public toolbarOptions: any[] = ["Add", "Edit", "Update", "Delete", "Cancel", "ExpandAll", "CollapseAll",{text: "Quick Filter", id:"filter"}
,{text: "Clear Filter", id:"clearfilter"}];
 //Default one.
  public columnSettings: object[] = [
    {field: "TaskID", headerText: "Task ID"},
    {field: "TaskName", headerText: "Task Name"},
    {field: "resources", headerText: "Task Name"},
    {field: "StartDate", headerText: "StartDate", format: "dd-MMM-yy"},
    {field: "Duration", textAlign: "Right"},
  ]
  public taskSettings: object = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predecessor",
    resourceInfo:"resources"
  }
  public changeDate(e:any){
    let unit: string = e;

    this.timelineSettings = {timelineViewMode:unit};
  }
  public toolbarBtnClicked(args:any):void{
    if(args.item.text === 'Quick Filter'){
      (this.ganttObject as GanttComponent).filterByColumn('TaskName', 'startswith', 'Market');
    } else if(args.item.text === "Clear Filter"){
      (this.ganttObject as GanttComponent).clearFiltering();
    }
  }

}
