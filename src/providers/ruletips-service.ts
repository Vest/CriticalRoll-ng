import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SettingsService} from "./settings-service";

@Injectable({providedIn: 'root'})
export class RuletipsService {

  private readonly http = inject(HttpClient);
  private readonly settingsService = inject(SettingsService);

  private readonly languanges: string[] = ['en', 'es'];
  private readonly systems: string[] = ['pfrpg', 'dnd3', 'dnd5'];

  private ruletips: { [key: string]: { [key: string]: RuleTip[]; }; } = {};

  constructor() {
    this.languanges.forEach(language => {
      this.ruletips[language] = {};
      this.systems.forEach(system => {
        this.ruletips[language][system] = [];
        this.loadFromJson(language, system);
      });
    });
  }

  private loadFromJson(language: string, system: string) {
    this.http.get<RuleTip[]>(`assets/json/${language}/${system}/ruletips.json`)
      .subscribe(data => {
        this.ruletips[language][system] = data;
      });
  }

  get(ruletipTag: string, language: string, system: string) {
    let sections = this.ruletips[language][system];
    /*
    for (let i = 0; i < sections.length; i++) {
      let foundRuletip = sections[i].ruletips.find(ruletip => {
        return ruletip.tag == ruletipTag
      });
      if (foundRuletip != null) return foundRuletip;
    }

     */
  }

  getAll() : RuleTip[] {
    const language = this.settingsService.getLanguage();
    const system = this.settingsService.getSystem();
    return this.ruletips[language][system];
  }
}

export interface Tag {
  tag: string;
  text: string;
  title: string;
}

export interface RuleTip {
  name: string;
  ruletips: Tag[];
}
