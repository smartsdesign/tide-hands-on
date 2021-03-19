
@Component({
  template: `
    <p>Welcome {{ fullName() }}!</p>
    <div (mousemove)="onMouseMove()">Drop a picture here</div>
  `,
})
export class PersonComponent implements OnInit {
  @Input() person: { firstName: string; lastName: string };

  constructor() {}

  public fullName(): any {
    return `${this.person.firstName} ${this.person.lastName}`;
  }

  public onMouseMove(): void {
    console.log('Mouse was moved');
  }
}

@Component({
    selector: 'app',
    template: `<ul>
                    <li *ngFor="let item of items;>{{item.name}}</li>
               </ul>`
})
class AppComponent {
    Items = [
        {
            id: 1,
            name: 'item 1'
        }, {
            id: 2,
            name: 'item 2'
        },
        ...
    ];
}


:host {
  .app-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100 %;
      ::ng-deep > * {
        margin: auto;

        @include media-breakpoint('gt-md') {
          width: 75%;
        }

        @include media-breakpoint('md') {
          width: 85%;
        }

        @include media-breakpoint('sm') {
          width: 90%;
        }
      }
    }
  }
