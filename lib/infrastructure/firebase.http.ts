import { FIREBASE_CONFIG } from "apps/config";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { Service } from "react-service-locator";
import { BaseHttpService } from "./http";

@Service()
export class FirebaseService implements BaseHttpService {
  private static db: Firestore;

  constructor() {
    const app = initializeApp(FIREBASE_CONFIG);
    FirebaseService.db = getFirestore(app);
  }

  async get<T>(url: string): Promise<any> {
    let result: any[] = [];
    const querySnapshot = await getDocs(collection(FirebaseService.db, url));
    querySnapshot.forEach((doc) => {
      result.push({ ...doc.data(), id: doc.id });
    });

    return Promise.resolve(result);
  }

  async post<T>(url: string, data: any): Promise<any> {
    const ref = collection(FirebaseService.db, url);
    return await addDoc(ref, data);
  }

  async patch<T>(url: string, data: any): Promise<any> {}

  async put<T>(url: string, data: any): Promise<any> {}

  async delete<T>(url: string): Promise<any> {}
}
