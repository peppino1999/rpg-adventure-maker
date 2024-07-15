import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersService } from '../../../core/services/characters.service';
import { EssentialComponent } from '../../../core/components/essentialComponent';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailComponent extends EssentialComponent  {

characterService = inject(CharactersService);
userID = this.routeParams['id'];

character$ = this.characterService.getCharacter(this.userID);

}
