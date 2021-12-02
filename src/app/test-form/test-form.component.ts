import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {
  @Input() childData: string = '';
  @Output() childEvent: any = new EventEmitter();

  public empName: string = '';
  public empScore: string = '';
  public employees: any = [];
  public myData: string = 'Child Data';

  addEmployee() {
    console.log('add employee.', this.empName, this.empScore);
    this.employees.push({ name: this.empName, score: this.empScore});
  }
  
  removeEmployee() {
    this.employees = [];
  }

  passChildData() {
    this.childEvent.emit(this.myData);
  }

}
