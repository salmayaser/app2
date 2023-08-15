import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app2';
  loading: boolean = false;
  constructor(private _sharedService: SharedService) {
    this._sharedService.loading$.subscribe((res) => {
      this.loading = res;
    });
  }
}
