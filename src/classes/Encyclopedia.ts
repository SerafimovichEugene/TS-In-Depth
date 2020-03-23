import { ReferenceItem } from "./ReferenceItem";
import { positiveInteger } from "../decorators";

export class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
      super(title, year);
    };

    private _copies: number;

    get copies() {
      return this._copies;
    }

    @positiveInteger
    set copies(value) {
      this._copies = value;
    }
  
    printItem(): void {
      super.printItem();
      console.log(`Edition: edition ${this.year}`);
    }
  
    PrintCitatin() {
      console.log(`${this.title}, ${this.year}`);
    }
  }