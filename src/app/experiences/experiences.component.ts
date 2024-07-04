import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  goTo(url: string): void {  // Suppression du mot-clé 'function' et ajout du type pour 'url'
    window.open(url, "_blank");
  }
}
