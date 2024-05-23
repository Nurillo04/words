import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable()
export class WordService {
  words: Word[] = [
    {
      id: 1,
      newWord: 'book',
      translation: 'kitob',
      example: 'I am reading an interesting book!',
      photo: '../assets/Png/book.jpg',
    },
    {
      id: 2,
      newWord: 'car',
      translation: 'mashina',
      example: 'I usually go to work by car',
      photo: '../assets/Png/car.jpg',
    },
    {
      id: 3,
      newWord: 'home',
      translation: 'uy',
      example: 'Now i am at home',
      photo: '../assets/Png/home.png',
    },
    {
      id: 4,
      newWord: 'programmer',
      translation: 'dasturchi',
      example: 'I am going to a professional programmer in the future.',
      photo: '../assets/Png/programmer.jpg',
    },
    {
      id: 5,
      newWord: 'ball',
      translation: 'koptok',
      example: 'I am playing a ball with  my friends.',
      photo: '../assets/Png/ball.png',
    },
    {
      id: 6,
      newWord: 'friend',
      translation: 'do`st',
      example: 'I have many friends.',
      photo: '../assets/Png/friend.jpeg',
    },
    {
      id: 7,
      newWord: 'work',
      translation: 'ish',
      example: 'I usually go to work by car.',
      photo: '../assets/Png/work.jpeg',
    },
    {
      id: 8,
      newWord: 'family',
      translation: 'oila',
      example: 'I love my family.',
      photo: '../assets/Png/family.jpeg',
    },
    {
      id: 9,
      newWord: 'money',
      translation: 'pul',
      example:
        'If I have much money, I will help all poor people in the world.',
      photo: '../assets/Png/money.jpeg',
    },
    {
      id: 10,
      newWord: 'dream',
      translation: 'orzu',
      example: ' My dream is being a doctor.',
      photo: '../assets/Png/dram.jpeg',
    },
  ];

  getAllWords() {
    return this.words;
  }
}
