import { Component } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';
import { Router } from '@angular/router';
// import { Word } from '../word/word.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  filteredWords!: Word[];

  constructor(private wordService: WordService, private router: Router) {
    this.filteredWords = this.wordService.words;
  }

  search(text: string) {
    this.filteredWords = this.wordService.words.filter((word) =>
      word.newWord.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  }

  // navigateToDetails() {
  //   alert('Hi');
  // }
}
