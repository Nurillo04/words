import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
// import { Word } from '../word/word.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  searchText = new FormControl('');

  filteredWords!: Word[];

  words!: Word[];
  /**
   *
   * @param wordService
   * @param router
   */

  constructor(private wordService: WordService, private router: Router) {
    this.wordService.getAllWords().then((words) => {
      this.words = words;
      this.filteredWords = words;
    });
  }
  ngOnInit(): void {
    this.searchText.valueChanges.subscribe((a) => {
      if (a) {
        this.search(a);
      } else {
        this.search('');
      }
    });
  }

  search(text: string) {
    this.filteredWords = this.words.filter((word) =>
      word.newWord.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  }

  // navigateToDetails() {
  //   alert('Hi');
  // }
}
