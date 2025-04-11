import {CommonModule} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonNav,
  IonSplitPane,
  IonTitle,
  IonToolbar, MenuController
} from '@ionic/angular/standalone';
import {GlossaryPage} from "../pages/glossary/glossary";

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

  @ViewChild(IonNav)
  nav!: IonNav;

  constructor(
    public menu: MenuController,
  ) {
    this.pages = [
      {title: 'Help', component: null, icon: 'app-icon-help'},
      {title: 'Glossary', component: GlossaryPage, icon: 'app-icon-glossary'},
      {title: 'Settings', component: null, icon: 'app-icon-settings'},
      {title: 'License', component: null, icon: 'app-icon-license'}
    ];
  }

  openRootPage() {
    alert(1);
  }

  openPage(page: any) {
    this.menu.close();
    this.nav.push(page.component);
  }
}
