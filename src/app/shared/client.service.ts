import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  backend_url: string = environment.backend;
  constructor(private _http: HttpClient) { }


  get_results(payload: any) {
    return this._http.post(this.backend_url + '/alerts' , payload);
  }

  get_alert(uuid: string) {
    return this._http.get( this.backend_url + '/alerts/' + uuid);
  }


  get_alerts_by_providers_weekly() {
    return this._http.get(this.backend_url + '/charts/provider_last7')
  }

  get_alerts_by_states_weekly() {
    return this._http.get(this.backend_url + '/charts/states_last7')
  }

  get_total_status() {
    return this._http.get(this.backend_url + '/charts/status_total')
  }

  get_total_providers() {
    return this._http.get(this.backend_url + '/charts/provider_total')
  }

  get_total_states() {
    return this._http.get(this.backend_url + '/charts/states_total')
  }
}
