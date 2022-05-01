import { Service } from "react-service-locator";

@Service()
export class NewDishService {
  constructor(
    private readonly name: string,
    private readonly number: number,
    private readonly price: number
  ) {}

  getDish = () => {
    return {
      name: this.name,
      number: this.number,
      price: this.number,
    };
  };

  create = (name: string, number: number, price: number) => {
    return new NewDishService(name, number, price);
  };

  addCategory = (category: string) => {};
}
