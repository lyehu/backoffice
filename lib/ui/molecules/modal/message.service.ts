import { Service } from "react-service-locator";
import { Subject } from "rxjs";

@Service()
export class MessageService {
  public state$ = new Subject();

  openModal = () => {
    this.sendMessage("open");
  };

  closeModal = () => {
    this.sendMessage("close");
  };

  private sendMessage = (message: string) => {
    this.state$.next(message);
  };
  public clearMessages = () => this.state$.next("");
}
