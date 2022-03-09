
  function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id)
    }



 function sortAccountsByLastName(accounts) {
   //accounts = accounts.map((account) => ({'name': account.name}))
   const sortedAccounts = accounts.sort((a, b) => a.name.last < b.name.last ? - 1 : 1);
   return sortedAccounts;
 }
 


function getTotalNumberOfBorrows(account, books) {
   var counter = 0;
   let result = books.filter((book) => book.borrows.filter((borrow) => { if(borrow.id == account.id) counter += 1}))
   
 return counter;
 }

function getBooksPossessedByAccount(account, books, authors) {
  let result = books.filter(book => book.borrows.find(
    (borrow) =>  ((borrow.id === account.id) && (borrow.returned === false)))
    )
 let result2 = result.map(book => { 
    let author2 = authors.find(author => book.authorId === author.id) 
    return  {...book, author: author2}})

  return result2
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
