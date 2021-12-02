import { Component, Input, SimpleChanges, OnChanges, OnInit, DoCheck, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-test-emp',
  templateUrl: './test-emp.component.html',
  styleUrls: ['./test-emp.component.css']
})
export class TestEmpComponent implements OnChanges, OnInit, DoCheck, OnDestroy, AfterViewInit{
  @Input() emp: any;

  constructor() {
    console.log('Constructor Called...');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges - inupt obj ==>', changes);
  }

  ngOnInit() {
    console.log('ngOnInit - Component initialized...');
  }

  ngDoCheck() {
    console.log('ngDoCheck...');
  }
  
  ngAfterViewInit() {
    console.log('ng after view init');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - clean up activity');
  }
}
