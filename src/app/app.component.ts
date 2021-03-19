import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'Tide Hands-On Exercise';
  public loading: boolean = true;

  public constructor() {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.loading = false;
  }
}
