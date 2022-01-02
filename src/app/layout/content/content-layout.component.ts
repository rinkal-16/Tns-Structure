import {Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
