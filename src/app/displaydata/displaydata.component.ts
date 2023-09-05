import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-displaydata',
  template: `
  <br>
  Username is: {{username}}<br>
  Password is: {{password}}<br><br>
  <button type="button" (click)="addNewUser(username)">Add to users, parent's list</button>
  <br>
  `,
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent {
  
  @Input() username!: string;
  @Input() password!: string;

  @Output() newUserEvent = new EventEmitter<string>();

  addNewUser(value: string){
    this.newUserEvent.emit(value);
  }
}
