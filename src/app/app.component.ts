import { Component } from '@angular/core';
import {
  IonApp, IonContent,
  IonHeader, IonIcon, IonList,
  IonMenu, IonNav,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
