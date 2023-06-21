import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EditService, GanttModule, SelectionService, ToolbarService, FilterService} from '@syncfusion/ej2-angular-gantt';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GanttsComponent } from './Components/gantt/gantt.component';
import { TimeLineComponent } from './Components/time-line/time-line.component';
import { MenuComponent } from './Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    GanttsComponent,
    TimeLineComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GanttModule,
    MatSelectModule,
    MatFormFieldModule,
    GridModule,
    ToolbarModule,
    DropDownListModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [EditService, ToolbarService, SelectionService,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
