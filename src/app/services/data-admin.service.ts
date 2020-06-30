import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { InscritosInterface } from '../models/inscritos';

@Injectable({
  providedIn: 'root'
})
export class DataAdminService {

  constructor(private afs: AngularFirestore) {
    this.subsCollection = afs.collection<InscritosInterface>('clases');
    this.subs = this.subsCollection.valueChanges();
   }

    private subsCollection: AngularFirestoreCollection<InscritosInterface>;
    private subs: Observable<InscritosInterface[]>;

  getAllsubs(){
    return this.subs;
  }
}
