import { Category } from "./enums";

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markedDamaged?: (reason: string) => void;
    markedDamaged?: DamageLogger;
}


interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (customerName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface libMgrCallback {
    (err: Error, titles: string[]) : void;
}

export { 
    Book, 
    DamageLogger as Loger, 
    Person, 
    Author, 
    Librarian, 
    Magazine, 
    ShelfItem,
    libMgrCallback,
};