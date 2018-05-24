import { SearchService } from './../shared/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecet-search',
  templateUrl: './fecet-search.component.html',
  styleUrls: ['./fecet-search.component.scss']
})
export class FecetSearchComponent implements OnInit {
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  page: number = 0;
  search_results: any[] = [];
  total_result: number = 0;
  constructor(private _search: SearchService) {
    this._search.getMessage().subscribe(message => { 
      // console.log(message);
      this.new_submit();
     });

   }

  ngOnInit() {

    this.submit_search()
  }


  submit_search() {
    this._search._client.get_results({
      page: this.page,
      payload: this._search.payload
    }).subscribe((res: any) => {
      this.page = this.page + 1
      this.total_result = res.count;
      this.search_results = this.search_results.concat(res.data);
    });
  }

  new_submit() {
    this.page = 0;
    this.search_results = [];
    this.submit_search();
  }

  onScrollDown() {
    this.submit_search();
  }

  onUp() {
    console.log('scrollup');
  }

}
