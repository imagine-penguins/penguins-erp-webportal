import { Component, OnInit, ViewChild} from '@angular/core';
import { formatDate } from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';

declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.scss',
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

export class ViewAttendanceComponent implements OnInit {

  class = ""
  report_for = ""
  student = 0
  showtab = 'student'
  start_date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  current_date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  month = formatDate(this.current_date,'MMMM','en');
  week = Number(formatDate(this.current_date,'w','en'));
  weeks = Array();
  months = Array();
  month_list : String[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  dataTable: any;
  dtOptions: any;
  @ViewChild('dataTable', {static: true}) table;

  constructor() {
  }

  ngOnInit() {
    this.showTab('student');
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);
    
    this.getCurrentMonthAndWeek();
    this.class = "1-A-Hindi"
    this.report_for = "daily"
    AmCharts.makeChart('email-sent', {
      type: 'serial',
      theme: 'light',

      dataDateFormat: 'MMM',
      precision: 2,
      valueAxes: [
        {
          id: 'v1',
          title: 'Leaves',
          position: 'left',
          autoGridCount: false,
          labelFunction: function (g) {
            return Math.round(g);
          }
        },
        {
          id: 'v2',
          title: 'Months',
          gridAlpha: 0,
          fontSize: 0,
          axesAlpha: 0,
          position: 'bottom',
          autoGridCount: false
        }
      ],
      graphs:
        [
          {
            id: 'g3',
            valueAxis: 'v1',
            lineColor: 'lightgrey',
            fillColors: 'lightgrey',
            fillAlphas: 1,
            type: 'column',
            title: 'Leave Trend',
            valueField: 'sales2',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '[[value]]',
            balloonText: '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
          }
         
        ],
      chartCursor: {
        pan: true,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 0,
        valueLineAlpha: 0.2
      },
      legend: {
        position: 'top'
      },
      categoryField: 'date',
      categoryAxis: {
        parseDates: false,
        dashLength: 0,
        axisAlpha: 0,
        GridAlpha: 0,
        minorGridEnabled: true
      },
      balloon: {
        borderThickness: 1,
        shadowAlpha: 0
      },
      'export': {
        enabled: true
      },
      dataProvider: [
        {
          date: 'Jan',
          sales2: 8
        },
        {
          date: 'Feb',
          sales2: 6
        },
        {
          date: 'Mar',
          sales2: 2
        },
        {
          date: 'Apr',
          sales2: 9
        },
        {
          date: 'May',
          sales2: 6
        },
        {
          date: 'Jun',
          sales2: 5
        },
        {
          date: 'Jul',
          sales2: 7
        }
      ]
    });

    AmCharts.makeChart('pie', {
      type: 'pie',
      theme: 'light',

      titleField  : "category",
      valueField  : "column-1",
      colors : [
        '#93BE52',
        '#ef6060',
        'lightgrey'
      ],
      dataProvider  : [
        {
          "category": "Present",
          "column-1": 60
        },
        {
          "category": "Absent",
          "column-1": 30
        },
        {
          "category": "Leave",
          "column-1": 10
        }
      ]
    });
    
  }

  getCurrentMonthAndWeek(){
    for(let i=1; i<=this.week; i++){
      this.weeks.push(i);
    }
    for(let i=0; i<this.month_list.length;i++){
      if(i<Number(formatDate(this.current_date,'M','en')))
        this.months.push(this.month_list[i]);
    }
  }

  showTab(key){
    $(".tab-content").css('display','none');
    $("#"+key).css("display","block");
  }
}
