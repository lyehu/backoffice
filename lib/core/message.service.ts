import { Service } from "react-service-locator";
import { Subject } from "rxjs";

@Service()
export class MessageService {
  public state$ = new Subject();
  public sendMessage = (message: string) => {
    this.state$.next(message);
  };
  public clearMessages = () => this.state$.next("");
  public onMessage = () => {
    return this.state$.asObservable();
  };
}
