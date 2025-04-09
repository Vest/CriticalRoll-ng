import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon, IonItem,
  IonList,
  IonMenu,
  IonNav,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonList, IonNav, IonMenu, IonSplitPane, IonButton, IonItem],
})
export class HomePage {
  rootPage: undefined;
  pages: Array<{ title: string, component: any, icon: string }>;
  content = "Test";

  constructor() {
    this.pages = [];
  }

  openRootPage() {
    alert(1);
  }

  openPage(p : any) {

  }
}
