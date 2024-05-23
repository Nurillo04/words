import { Component, Input } from '@angular/core';
import { Word } from '../word';
// import { Word } from '../word';

@Component({
  selector: 'word',
  templateUrl: './word.component.html',
  styleUrl: './word.component.scss',
})
export class WordComponent {
  @Input()
  word!: Word;
}
