import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
import {SettingsService} from "./settings-service";

@Injectable({providedIn: 'root'})
export class RuletipsService {

  private readonly http = inject(HttpClient);

  private readonly languanges: string[] = ['en', 'es'];
  private readonly systems: string[] = ['pfrpg', 'dnd3', 'dnd5'];

  private ruletips: { [key: string]: { [key: string]: object; }; } = {};

  constructor(private readonly settingsService: SettingsService) {

    this.languanges.forEach(language => {
      this.ruletips[language] = {};
      this.systems.forEach(system => {
        this.ruletips[language][system] = {};
        this.loadFromJson(language, system);
      });
    });
  }

  private loadFromJson(language: string, system: string) {
    this.http.get('assets/json/' + language + '/' + system + '/ruletips.json')
      .subscribe(data => {
        debugger
        this.ruletips[language][system] = data;
      });
  }

  get(ruletipTag: string, language: string, system: string) {
    let sections = this.ruletips[language][system];
    debugger
    /*
    for (let i = 0; i < sections.length; i++) {
      let foundRuletip = sections[i].ruletips.find(ruletip => {
        return ruletip.tag == ruletipTag
      });
      if (foundRuletip != null) return foundRuletip;
    }

     */
  }

  getAll() {
    let ruletips = this.ruletips[this.settingsService.getLanguage()][this.settingsService.getSystem()];
   // return Object.keys(ruletips).map(key => ruletips[key]);
    return [];
  }
}
