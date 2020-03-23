import { ShelfItem } from '../interfaces';

export class Shelf<T extends ShelfItem = ShelfItem> {

    private _items = new Array<T>();

    public add(item: T): void {
        this._items.push(item);
    }

    public getFirst(): T {
        return this._items[0];
    }

    public find(title: string): T {
        return this._items.find(i => i.title === title);
    }

    public printTitles(): void {
        console.log(this._items.map(i => i.title));
    }
}