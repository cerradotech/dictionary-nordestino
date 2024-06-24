import { firebaseInstance } from '~/core';
import { Firestore, InitFirestore, doc, getDoc } from '~/modules';

export default class FirestoreService {
  database: Firestore;

  constructor() {
    this.database = InitFirestore(firebaseInstance);
  }

  public async getDocData(collection: string, docName: string): Promise<any> {
    const document = await getDoc(doc(this.database, collection, docName));
    return document.data();
  }
}
