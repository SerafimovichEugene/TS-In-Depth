import { timeout } from "../decorators";

export abstract class ReferenceItem {
    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    static department: string = 'cls'

    private _publisher: string

    get publisher(): string {
        return this._publisher;
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    @timeout(1500)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    abstract PrintCitatin(): void
}