import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hello Angular Page';
  public parentVariable: string = 'Parent data';
  public status: boolean = false;
  public myStyle: any = {
    backgroundColor: 'blue',
    color: 'white'
  };
  
  getChildData(data: any) {
    console.log('data ==>', data);
  }

  toggleStatus() {
    this.status = !this.status;
  }

  getStatusValue() {
    return this.status ? 'online' : 'offline';
  }
}
