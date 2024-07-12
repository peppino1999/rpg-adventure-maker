import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersService } from '../../../core/services/characters.service';
import { characterFormConfig } from '../../../core/configs/characters';
import { Form } from '@angular/forms';
import { Character } from '../../../core/models/characters';
import { tap } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
  characterService = inject(CharactersService)
  currentCharacterID!: number | string;
  currentCharacterData!: Character
  character$ = this.characterService.getCharacter().pipe(
    tap(
      res => {
        this.currentCharacterID = res?.id
        this.currentCharacterData = res
      }
    )
  )
  formConfig = characterFormConfig

  handleSubmit(data: Partial<Character>){
    console.log(this.currentCharacterData)
    if(this.currentCharacterData){
      this.character$ = this.characterService.updateCharacter(data, this.currentCharacterID)
    }else{
      this.character$ = this.characterService.createCharacter(data)

    }
  }
}
