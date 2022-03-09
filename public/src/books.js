function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
  }

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
 let borrowedData = books.filter((book) => book.borrows[0].returned === false)
 let returnedData = books.filter((book) => book.borrows[0].returned === true)
 return [borrowedData, returnedData]
}

 function getBorrowersForBook(book, accounts) {
   let borrowed = book.borrows
   
   let accountObj = borrowed.map((borrow) => {
    
     let match = accounts.find( account => (borrow.id === account.id)) 
   match.returned = borrow.returned
 
  return match; 
  
   
 })
 
 return accountObj.slice(0,10)
 }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
