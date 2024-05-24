import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../word.service';
import { Word } from '../word';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  word?: Word;

  constructor(private route: ActivatedRoute, private wordService: WordService) {
    const wordId: string = this.route.snapshot.params['id'];
    this.word = this.wordService.getAllWordById(+wordId);
  }
}
