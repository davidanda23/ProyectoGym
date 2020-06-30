import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { TeacherInterface } from '../models/teacher';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
      this.booksCollection = afs.collection<TeacherInterface>('contact_teacher');
      this.books = this.booksCollection.valueChanges();
  }

  private booksCollection: AngularFirestoreCollection<TeacherInterface>;
  private books: Observable<TeacherInterface[]>;

  getAllBooks(){
    return this.books;
  }
}
