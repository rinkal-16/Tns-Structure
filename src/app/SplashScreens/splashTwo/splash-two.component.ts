import { Component, OnInit } from '@angular/core'
import {RouterExtensions} from "@nativescript/angular";
import {AndroidActivityBackPressedEventData, AndroidApplication, Application, Page} from "@nativescript/core";
import {exit} from "nativescript-exit";

@Component({
  selector: 'Browse',
  templateUrl: './splash-two.component.html',
})
export class SplashTwoComponent implements OnInit {

  constructor(private routerExtension: RouterExtensions, private page: Page) {
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    Application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
        exit();
    });
  }

  goToTabs(): void {
    // console.log('++++++++++++', this.routerExtension.navigate(['../tabs']));
    this.routerExtension.navigate(['login']);
  }
}
