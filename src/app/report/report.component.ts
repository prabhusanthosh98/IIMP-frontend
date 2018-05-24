import { ClientService } from './../shared/client.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements AfterViewInit {

  constructor(private _clinet: ClientService) { }
  chart1 = [];
  chart2 = [];
  chart3 = [];
  chart4 = [];
  chart5 = [];
  ngAfterViewInit() {
    this.genchart1();
    this.genchart2();
    this.genchart3();
    this.genchart4();
    this.genchart5();
  }

  genchart1() {


    this._clinet.get_alerts_by_providers_weekly().subscribe((provider_data: any) => {

      var temp_dataset: any = {
        type: 'line',
        data: {
          labels: provider_data.dates,
          datasets: []
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }

      provider_data.provider.map(i => {
        let color: string = random_rgba()
        var data_set: any = {

          label: i,
          data: provider_data[i],
          borderColor: color,
          backgroundColor: color
        }
        temp_dataset.data.datasets.push(data_set);
      });



      this.chart1 = new Chart('canvas1', temp_dataset);
    })


  }


  genchart2() {

    this._clinet.get_alerts_by_states_weekly().subscribe((state_data: any) => {

      var temp_dataset: any = {
        type: 'bar',
        data: {
          labels: state_data.dates,
          datasets: []
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }

      state_data.states.map(i => {
        let color: string = random_rgba()
        var data_set: any = {

          label: i,
          data: state_data[i],
          borderColor: color,
          backgroundColor: color
        }
        temp_dataset.data.datasets.push(data_set);
      });



      this.chart2 = new Chart('canvas2', temp_dataset);
    })


  }


  genchart3() {
    this._clinet.get_total_status().subscribe((status_data: any) => {
      var labels = [];
      var color = [];
      var data = [];

      status_data.map((i: any) => {
        labels.push(i.status);
        data.push(i.total_alerts);
        color.push(random_rgba());
      })

      var temp_dataset: any = {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: "alerts",
            backgroundColor: color,
            data: data
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Total status'
          }
        }
      }




      this.chart3 = new Chart('canvas3', temp_dataset);
    })


  }

  genchart4() {
    this._clinet.get_total_providers().subscribe((status_data: any) => {
      var labels = [];
      var color = [];
      var data = [];

      status_data.map((i: any) => {
        labels.push(i.provider);
        data.push(i.total_alerts);
        color.push(random_rgba());
      })

      var temp_dataset: any = {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: "alerts",
            backgroundColor: color,
            data: data
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Total alerts per provider'
          }
        }
      }
      this.chart4 = new Chart('canvas4', temp_dataset);
    })
  }

  genchart5() {
    this._clinet.get_total_states().subscribe((status_data: any) => {
      var labels = [];
      var color = [];
      var data = [];

      status_data.map((i: any) => {
        labels.push(i.state);
        data.push(i.total_alerts);
        color.push(random_rgba());
      })

      var temp_dataset: any = {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: "alerts",
            backgroundColor: color,
            data: data
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Total alerts per state'
          }
        }
      }
      this.chart5 = new Chart('canvas5', temp_dataset);
    })


  }



}




function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

