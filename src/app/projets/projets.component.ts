import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss'
})
export class ProjetsComponent {
  goTo(url: string): void {  // Suppression du mot-clé 'function' et ajout du type pour 'url'
    window.open(url, "_blank");
  }
}

