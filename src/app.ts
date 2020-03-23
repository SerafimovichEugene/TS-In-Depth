import { Category } from "./enums";
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from "./types";
import { 
  RefBook,
  ReferenceItem,
  UniversityLibrarian,
  Shelf,
} from './classes';
import { 
  Loger, 
  Book, 
  Author, 
  Librarian,
  Magazine
} from "./interfaces";
import { 
  getAllBooks, 
  logFirstAvailable, 
  getBookTitlesByCategory, 
  logBookTitles, 
  getBookAuthorByIndex, 
  getBookByID, 
  createCustomerID, 
  createCustomer, 
  printBook, 
  getBookProp, 
  purge,
  getBooksByCategory,
  logCategorySearch,
  getBooksByCategoryPromise,
  logSearchResults,
} from "./functions";
import { Encyclopedia } from "./classes/Encyclopedia";


// task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// getBookAuthorByIndex(2);

// task 02.02
// done

// task 03.01
// getBookByID(1);

// task 03.02
// const myID = createCustomerID('Ann', 10);
// console.log(myID);

// task 03.03
// createCustomer('ann')
// createCustomer('ann', 23)
// createCustomer('ann', 34, 'minsk')


// task 04.01

// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   // year: 2015,
//   // copies: 3,
//   pages: 200,
//   markedDamaged: (reason) => {
//     console.log(`Damaged: ${reason}`);
//   }
// }
// printBook(myBook);
// myBook.markedDamaged('too cheesy');


// task 04.02

// const logDamage: Loger = (reason: string) => {
//   console.log(`Damaged: ${reason}`);
// }


// task 04.03

// const favoriteAuthor: Author = {
//   name: 'ann',
//   email: 'ann@f.c',
//   numBooksPublished: 10,
// }

// const favoriteLibrarian: Librarian = {
//   name: 'boris',
//   email: 'boris@f.c',
//   department: 'cls',
//   assistCustomer: (name) => { 
//     console.log(`assisted ${name}`);
//   }
// }

// task 04.04
// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// }

// console.log(offer?.magazine);

// task 04.05
// const book = getAllBooks()[0];
// console.log(getBookProp(book, 'title'));
// console.log(getBookProp(book, 'markedDamaged'));
// console.log(getBookProp(book, 'isbn'));


// task 05.01
// const ri = new ReferenceItem('grgr', 1999);
// console.log(ri);
// ri.printItem();
// ri.publisher = 'sdf';
// console.log(ri.publisher);

// task 05.02
// const enc = new RefBook('new enc', 2005, 12);
// enc.printItem();

// task 05.03
// const refBook = new RefBook('title', 2020, 12);
// refBook.PrintCitatin();

// task 05.04
// const fl = new UniversityLibrarian('dep1', 'ann', 'email');
// console.log(fl);
// fl.assistCustomer('boris');

//05.05
// const pb: PersonBook = {
//   name: 'name1',
//   email: 'email1',
//   id: 1,
//   title: 'titel1',
//   category: Category.CSS,
//   author: 'auth1',
//   available: false,
// };
// console.log(pb);


//06.05
// import('./classes')
//   .then(res => {
//     const reader = new res.Reader();
//     console.log(reader);
//   })


//07.01
// const inventory: Book[]= [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// console.log(purge(inventory));
// console.log(purge([1, 2 ,3, 4, 5, 6]));


//07.02

// const bookShelf = new Shelf<Book>();
// inventory.forEach((book) => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach((mag) => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());


//07.03
// magazineShelf.printTitles()
// console.log(magazineShelf.find('Five Points'));

//07.04
// const v: BookRequiredFields = { 
//   id: 10, 
//   title: 'The C Programming Language', 
//   author: 'K & R', 
//   available: true, 
//   category: Category.Software,
//   pages: 123,
//   markedDamaged: (reason) => {console.log(reason)},
// };

// const updatedBook: UpdatedBook = {};

// const params: Parameters<typeof createCustomer> = ['sadf'];


//08.01, 08.02
// const l = new UniversityLibrarian('dep', 'name1', 'email1');
// console.log(l);
// l.name = 'my super name';
// (l as any).printLibrarian();

//08.03
// const l = new UniversityLibrarian('dep', 'name1', 'email1');
// l.assistCustomer = null;
// l.teachCommunity = null;

//08.04
// const ri = new RefBook('grgr', 1999, 1);
// ri.printItem();

//08.05
// const l = new UniversityLibrarian('dep', 'anna', 'email1');
// l.assistCustomer('boris');

//08.06
// const l = new UniversityLibrarian('dep', 'anna', 'email1');
// l.name = 'boris'
// console.log(l.name);

//08.07
// const ri = new RefBook('grgr', 1999, 1);
// ri.copies = 10;
// ri.copies = -10;

//09.01
// console.log('start')
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('end');

//09.02
// console.log('start');

// getBooksByCategoryPromise(Category.CSS)
//   .then(titles => {
//     console.log(titles);
//     return titles.length;
//   })
//   .then(number => console.log(number));

// getBooksByCategoryPromise(Category.Angular)
//   .catch(err => console.log(err));

// console.log('end');

//09.03
// console.log('start')
// logSearchResults(Category.CSS)
//   .catch(err => console.log(err));
// console.log('end');