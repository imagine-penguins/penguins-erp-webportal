import { Component, OnInit, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

declare const $: any;

@Component({
  selector: 'app-takeattendance',
  templateUrl: './takeattendance.component.html',
  styleUrls: ['./takeattendance.component.scss',
              '../../../app.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class TakeAttendanceComponent implements OnInit {
 
  dataTable: any;
  @ViewChild('dataTable', {static: true}) table;

  constructor() {
  }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }


}
