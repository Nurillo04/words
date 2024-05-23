import { Component } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';
// import { Word } from '../word/word.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  filteredWords!: Word[];

  constructor(private wordService: WordService) {
    this.filteredWords = this.wordService.words;
  }

  search(text: string) {
    this.filteredWords = this.wordService.words.filter((word) =>
      word.newWord.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}
