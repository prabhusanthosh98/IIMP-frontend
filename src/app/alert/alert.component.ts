import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() data: any;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  redirect() {
    this._router.navigate(['alert/' + this.data.uuid]);
  }

}
