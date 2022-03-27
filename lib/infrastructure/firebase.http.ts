import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  Firestore,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import { Service } from "react-service-locator";
import { CustomHttpService } from "./http";

@Service()
export class FirebaseService implements CustomHttpService {
  constructor() {}
  private static db: Firestore;

  init(config: FirebaseOptions) {
    const app = initializeApp(config);
    FirebaseService.db = getFirestore(app);
  }

  async get<T>(url: string): Promise<any> {
    let result: any[] = [];
    const querySnapshot = await getDocs(collection(FirebaseService.db, url));
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
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
