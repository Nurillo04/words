import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../word.service';
import { Word } from '../word';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  /**
   */
  word?: Word;

  /**
   */
  // form: FormGroup = new FormGroup({
  //   name: new FormControl(' '),
  //   coment: new FormControl(' '),
  // });
  /**
   *
   * @param route
   * @param wordService
   */
  constructor(private route: ActivatedRoute, private wordService: WordService) {
    const wordId: string = this.route.snapshot.params['id'];
    this.word = this.wordService.getAllWordById(+wordId);
  }
}
