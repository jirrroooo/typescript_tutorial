const greeting2: string = 'Hello, Jiro!';

const year: number = 2021;

console.log(greeting2.toLowerCase());

const add = (a: number, b: number): number => a+b;

interface User{
    id: string;
    name: string;
}

interface Book{
    id: string;
    name: string;
    releaseDate: Date;
}

console.log(add(2,3));

const getUserById = (id: string): User => ({
    id,
    name: "John Rommel",
})

const getBookById = (id: string): Book => ({
    id,
    name: "Compendium",
    releaseDate: new Date()
})

const user = getUserById('user-1');
const book: Book = getBookById('book-1');

const saveUser = (user: User) => console.log("saving user", {
    prop1: user.id,
    prop2: user.name
});

const saveBook = (book: Book) => console.log("saving book", {
    prop1: book.id,
    prop2: book.name,
    prop3: book.releaseDate?.toISOString()
});


saveUser(user);
saveBook(book);