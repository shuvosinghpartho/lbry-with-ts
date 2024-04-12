interface Book {
    id: number;
    title: string;
    author: string;
    isbn: string;
}

interface LibraryMember {
    id: number;
    name: string;
    email: string;
}

interface Transaction {
    id: number;
    bookId: number;
    memberId: number;
    checkoutDate: Date;
    returnDate?: Date;
}

class Library {
    private books: Book[] = [];
    private members: LibraryMember[] = [];
    private transactions: Transaction[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(id: number): void {
        this.books = this.books.filter(book => book.id !== id);
    }

    addMember(member: LibraryMember): void {
        this.members.push(member);
    }

    removeMember(id: number): void {
        this.members = this.members.filter(member => member.id !== id);
    }

    checkoutBook(bookId: number, memberId: number): void {
        const book = this.books.find(book => book.id === bookId);
        const member = this.members.find(member => member.id === memberId);

        if (!book || !member) {
            console.log("Book or member not found");
            return;
        }

        if (this.isBookCheckedOut(bookId)) {
            console.log("Book is already checked out");
            return;
        }

        const transaction: Transaction = {
            id: this.transactions.length + 1,
            bookId,
            memberId,
            checkoutDate: new Date(),
        };

        this.transactions.push(transaction);
        console.log("Book checked out successfully");
    }

    returnBook(bookId: number): void {
        const transaction = this.transactions.find(transaction => transaction.bookId === bookId);

        if (!transaction) {
            console.log("Transaction not found");
            return;
        }

        transaction.returnDate = new Date();
        console.log("Book returned successfully");
    }

    isBookCheckedOut(bookId: number): boolean {
        return this.transactions.some(transaction => transaction.bookId === bookId && !transaction.returnDate);
    }
}

// Example usage
const library = new Library();

library.addBook({ id: 1, title: "Harry Potter", author: "J.K. Rowling", isbn: "1234567890" });
library.addMember({ id: 1, name: "John Doe", email: "john@example.com" });

library.checkoutBook(1, 1);
console.log(library.isBookCheckedOut(1)); // Output: true

library.returnBook(1);
console.log(library.isBookCheckedOut(1)); // Output: false
