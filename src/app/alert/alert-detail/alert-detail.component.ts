import { SearchService } from './../../shared/search.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alert-detail',
  templateUrl: './alert-detail.component.html',
  styleUrls: ['./alert-detail.component.scss']
})
export class AlertDetailComponent implements OnInit {

  constructor(private _search: SearchService, private _activatedRoute: ActivatedRoute) { }
  data: any = {}
  uuid: any;
  @ViewChild('videoPlayer') videoplayer: any;
  ngOnInit() {
    this._activatedRoute.params
      .subscribe(
        param => {
          this.uuid = param['uuid'];
          this.get_result();
        }

      )
  }

  get_result() {
    this._search._client.get_alert(this.uuid).subscribe(data => {
      this.data = data;
    })
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

}
