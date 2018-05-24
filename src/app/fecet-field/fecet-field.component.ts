import { SearchService } from './../shared/search.service';

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-fecet-field',
  templateUrl: './fecet-field.component.html',
  styleUrls: ['./fecet-field.component.scss']
})
export class FecetFieldComponent implements OnInit {
  @Input() key: string;
  Fields$: any[] = [];
  page: number = 0;
  selectedFields = [];
  select_form: FormGroup;

  focusout() {
    if (this.selectedFields.length > 0) {
      this._search.payload[this.key] = this.selectedFields;
    } else {
      delete this._search.payload[this.key];
    }
    this._search.sendMessage('Triggered!');
  }
  
  constructor(private _search: SearchService, private fb: FormBuilder) {
    this._search.getMessage().subscribe(message => { 
      // console.log(message);
      this.new_submit();
     });

  }
  ngOnInit() {
    
    if (this._search.payload[this.key] && this._search.payload[this.key].length > 0) {
      this.selectedFields =  this._search.payload[this.key];
    }
    this.select_form = this.fb.group({
      selectedFields: [],
    })
    this.submit_search();
  }


  new_submit() {
    this.page = 0;
    this.Fields$ = [];
    this.select_form.controls.selectedFields.disable();
    this.submit_search();
  }


  fetchMore(event: any) {
    this.submit_search();
  }

  submit_search() {
    
    this._search._client.get_results({
      required: this.key,
      page: this.page,
      payload: this._search.payload
    }).subscribe((res: any) => {
      this.page = this.page + 1
      this.Fields$ = this.Fields$.concat(dict_to_list(res));
      this.select_form.controls.selectedFields.enable();
    });
  }

}

function dict_to_list(data_list: any[]) {
  return data_list.map(i => i.name);
}
