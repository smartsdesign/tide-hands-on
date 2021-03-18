import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'tide-hands-on';
  public loading: boolean = true;

  public constructor(private _storageService: StorageService) {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    // this.loading = false;
  }
}
