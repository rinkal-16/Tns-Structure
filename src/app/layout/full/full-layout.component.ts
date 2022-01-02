import {Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FullLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() { }
}
