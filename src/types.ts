import { Book, Person, Author } from "./interfaces";
import { createCustomer } from './functions';

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;

export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;

export type СreateCustomerFunctionType = (ame: string, age?: number, city?: string) => void;