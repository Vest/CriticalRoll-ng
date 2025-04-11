import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

// import {RuletipsService} from "../../providers/ruletips-service";

@Component({
  selector: 'app-glossary',
  templateUrl: 'glossary.html',
  styleUrls: ['glossary.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItemGroup, IonItemDivider, IonItem]
})
export class GlossaryPage {
  ruletips: any;

  constructor() {
    // this.ruletips = ruletipsService.getAll();
    this.ruletips = null;
  }

  displayRuletip(title: string, text: string) {

  }
}
