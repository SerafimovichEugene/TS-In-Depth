import { Book, libMgrCallback } from "./interfaces";
import { BookOrUndefined, BookProperties } from "./types";
import { Category } from "./enums";

export function getAllBooks(): readonly Book[] {
    return <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: 1 },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: 1 },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: 2 },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: 1 }
      ]
}

export function logFirstAvailable(books: readonly Book[]) {
    console.log(books.length);
    console.log(books[0].title);
}

export function getBookTitlesByCategory(category: Category): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}


export function logBookTitles(rows: string[]): void {
    console.log(rows);
}

export function getBookAuthorByIndex(i: number): [string, string] {
    const books = getAllBooks();
    books.forEach(book => book['sdf'] = 'df')
    return [books[i].title, books[i].author]
}

export function calcTotalPages(): bigint {
    const libs = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, 
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, 
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    return libs.reduce((acc, lib) => acc += BigInt(lib.avgPagesPerBook) * BigInt(lib.books), BigInt(0))
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number) {
    return `${name}_${id}`;
}

export function createCustomer(name: string, age ? : number, city ? : string) {
    console.log(`create customer ${name}`);
    if (age) {
        console.log(`create age ${age}`);
    }
    if (city) {
        console.log(`create age ${city}`);
    }
}

export function printBook(book: Book) {
    console.log(book.title, book.author);
}

export function getBookProp(book: Book, propName: BookProperties) {
    if (typeof book[propName] === 'function') {
        return (book[propName] as Function).name;
    }
    return book[propName];
}

export function purge<T>(inventory: T[]) {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: libMgrCallback): void {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found.');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000)
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log('-->', err.message);

    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]> (
        (resolve, reject) => {
            setTimeout(() => {
                const titles: string[] = getBookTitlesByCategory(category);
                console.log(titles);
                if (titles.length > 0) {
                    resolve(titles);
                } else {
                    reject('No books found.')
                }
            }, 2000)

        }
    );
}

export async function logSearchResults(category: Category): Promise<any> { 
    const books = await getBooksByCategoryPromise(category);
    console.log(books.length);
}