import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import {
  GridLayout,
  Screen,
  AnimationCurve,
  PanGestureEventData,
  GestureStateTypes,
  GestureEventData,
} from "@nativescript/core";

import { SelectedIndexChangedEventData } from "@nativescript/core/ui/tab-view";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  @ViewChild("tabs", { static: true }) tabs: ElementRef;
  @ViewChild("centerCircle", { static: true }) centerCircle: ElementRef;
  @ViewChild("dragCircle", { static: true }) dragCircle: ElementRef;
  @ViewChild("leftTabs", { static: true }) leftTabs: ElementRef;
  @ViewChild("rightTabs", { static: true }) rightTabs: ElementRef;
  @ViewChild("centerPatch", { static: true }) centerPatch: ElementRef;
  @ViewChild("tabBGContainer", { static: true }) tabBGContainer: ElementRef;

  @ViewChildren("tabContents", { read: ElementRef })
  tabContents: QueryList<ElementRef>;

  // Pan Helper
  prevDeltaX: number = 0;

  animationCurve = AnimationCurve.cubicBezier(0.38, 0.47, 0, 1);

  // Tab Contents and Properties
  tabContainer = {
    backgroundColor: "#FFFF00",
    focusColor: "#fff",
  };
  tabList: {
    text: string;
    icon?: string;
    color?: string;
    backgroundColor: string;
    fadeColor?: string;
  }[] = [
    { text: "A", backgroundColor: "#5B37B7", color: "#000" },
    { text: "B", backgroundColor: "#E6A938", color: "#000" },
    { text: "C", backgroundColor: "#C9449D", color: "#000" },
    { text: "D", backgroundColor: "#4195AA", color: "#000" },
    { text: "E", backgroundColor: "#fff", color: "#000" },
  ];

  currentTabIndex: number = 2;
  defaultSelected: number = 2;

  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initializeTabBar();
  }

  // Tabs selected index is changed
  onSelectedIndexChanged(args: SelectedIndexChangedEventData): void {
    if (args.newIndex !== this.currentTabIndex) {
      this.onBottomNavTap(args.newIndex);
    }
  }

  // Tap on a one of the tabs
  onBottomNavTap(index: number, duration: number = 300): void {
    if (this.currentTabIndex !== index) {
      const tabContentsArr = this.tabContents.toArray();

      // set unfocus to previous index
      tabContentsArr[this.currentTabIndex].nativeElement.animate(
        this.getUnfocusAnimation(this.currentTabIndex, duration)
      );

      // set focus to current index
      tabContentsArr[index].nativeElement.animate(
        this.getFocusAnimation(index, duration)
      );
    }

    // Change the selected index of Tabs when tap on tab strip
    if (this.tabs.nativeElement.selectedIndex !== index) {
      this.tabs.nativeElement.selectedIndex = index;
    }

    this.centerCircle.nativeElement.animate(
      this.getSlideAnimation(index, duration)
    );
    this.leftTabs.nativeElement.animate(
      this.getSlideAnimation(index, duration)
    );
    this.rightTabs.nativeElement.animate(
      this.getSlideAnimation(index, duration)
    );
    this.centerPatch.nativeElement.animate(
      this.getSlideAnimation(index, duration)
    );
    this.dragCircle.nativeElement.animate(
      this.getSlideAnimation(index, duration)
    );

    // set current index to new index
    this.currentTabIndex = index;
  }

  // Drag the focus circle to one of the tabs
  onCenterCirclePan(args: PanGestureEventData): void {
    let grdLayout: GridLayout = <GridLayout>args.object;
    let newX: number = grdLayout.translateX + args.deltaX - this.prevDeltaX;

    if (args.state === 0) {
      // finger down
      this.prevDeltaX = 0;
    } else if (args.state === 2) {
      // finger moving
      grdLayout.translateX = newX;
      this.leftTabs.nativeElement.translateX = newX;
      this.rightTabs.nativeElement.translateX = newX;
      this.centerPatch.nativeElement.translateX = newX;
      this.centerCircle.nativeElement.translateX = newX;

      this.prevDeltaX = args.deltaX;
    } else if (args.state === 3) {
      this.prevDeltaX = 0;
      const tabWidth = Screen.mainScreen.widthDIPs / this.tabList.length;
      const tabSelected: number = Math.round(Math.abs(newX / tabWidth));
      const translateX: number = tabSelected * tabWidth;
      if (newX < 0) {
        // pan left
        this.onBottomNavTap(this.defaultSelected - tabSelected, 50);
        // Change the selected index of Tabs when pan left
        this.tabs.nativeElement.selectedIndex =
          this.defaultSelected - tabSelected;
      } else {
        // pan right
        this.onBottomNavTap(this.defaultSelected + tabSelected, 50);
        // Change the selected index of Tabs when pan right
        this.tabs.nativeElement.selectedIndex =
          this.defaultSelected + tabSelected;
      }
    }
  }

  initializeTabBar(): void {
    // set up base layer
    this.leftTabs.nativeElement.width = Screen.mainScreen.widthDIPs;
    this.rightTabs.nativeElement.width = Screen.mainScreen.widthDIPs;
    this.centerPatch.nativeElement.width = 100;

    this.tabBGContainer.nativeElement.translateX =
      -(Screen.mainScreen.widthDIPs / 2) - 80 / 2;

    // set default selected tab
    const tabContentsArr = this.tabContents.toArray();
    tabContentsArr[this.defaultSelected].nativeElement.scaleX = 1.5;
    tabContentsArr[this.defaultSelected].nativeElement.scaleY = 1.5;
    tabContentsArr[this.defaultSelected].nativeElement.translateY = -15;
    this.currentTabIndex = this.defaultSelected;
  }

  getSlideAnimation(index: number, duration: number) {
    return {
      translate: { x: this.getTabTranslateX(index), y: 0 },
      curve: this.animationCurve,
      duration: duration,
    };
  }

  getFocusAnimation(index: number, duration: number) {
    return {
      scale: { x: 1.5, y: 1.5 },
      translate: { x: 0, y: -15 },
      duration: duration,
    };
  }

  getUnfocusAnimation(index: number, duration: number) {
    return {
      scale: { x: 1, y: 1 },
      translate: { x: 0, y: 0 },
      duration: duration,
    };
  }

  getTabTranslateX(index: number): number {
    return (
      (index * Screen.mainScreen.widthDIPs) / this.tabList.length -
      Screen.mainScreen.widthDIPs / 2 +
      80 / 2
    );
  }
}
