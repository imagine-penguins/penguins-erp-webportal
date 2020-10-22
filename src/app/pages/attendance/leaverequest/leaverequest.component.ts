import { Component, OnInit, ViewChild} from '@angular/core';
import { formatDate } from '@angular/common';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';

declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.scss',
              '../../../app.component.scss']
})
export class LeaveRequestComponent implements OnInit {

  class = ""
  report_for = ""
  student = 0
  start_date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  current_date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  month = formatDate(this.current_date,'MMMM','en');
  week = Number(formatDate(this.current_date,'w','en'));
  weeks = Array();
  months = Array();
  month_list : String[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  dataTable: any;
  @ViewChild('dataTable', {static: true}) table;

  constructor() {
  }

  ngOnInit() {

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();

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

}
