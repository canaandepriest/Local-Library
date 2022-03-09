function getTotalBooksCount(books) {
   return books.length
 
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}


function getBooksBorrowedCount(books) {
 let sum = 0
  let result = books.find((book) => {
    if(book.borrows[0].returned === false){

    
    sum ++  
    }                   
  })
 return sum
}
 //map the genres 
//reduce the generes to get count 
//dont know how to get name to match the genre
//

function getMostCommonGenres(books) {
  let arr = []
  let sum = 0;
  const result = books.map((book) => book.genre)
  const uniqueVal = [...new Set(result)];
  //console.log(result)
  //console.log(uniqueVal)
  const result2 = uniqueVal.map((genre) => {
    return {name: genre , count: books.filter((book) => genre === book.genre).length}
  })
  const result3 = result2.sort((a, b) => b.count - a.count)
  const result4 = result3.splice(0, 5)
  return result4;

}

  function getMostPopularBooks(books){
     const result = books.map((book) => {
      return { count: book.borrows.length, name: book.title }
     }) 
     const result2 = result.sort((a, b) => b.count - a.count)
     //console.log(result2)
   const popBooks = result2.splice(0, 5)
     return popBooks
   
   }
 


function getMostPopularAuthors(books, authors) {
  const result = authors.map((author) => {
        return  {name: author.name.first + ' ' + author.name.last, count: books.filter((book) => book.authorId === author.id).reduce((accumalator, book) =>{
          return accumalator + book.borrows.length
        }, 0)}
    
  })
  const result2 = result.sort((a, b) => b.count - a.count)
 
  const result3 = result2.splice(0,5)
  console.log(result3)
  return result3
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
