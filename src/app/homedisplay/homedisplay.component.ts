import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-homedisplay',
  templateUrl: './homedisplay.component.html',
  styleUrls: ['./homedisplay.component.css']
})
export class HomedisplayComponent {

  // data : any;
  constructor(public _dataService: DataService ){}

  public buttonClick(value: string): void {
    this._dataService.myData =  value;
  }

}
