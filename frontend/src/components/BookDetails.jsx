import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBookQuery } from './../queries/queries'

export default function BookDetails({ book }) {
  const { loading: bookQueryLoading, error: bookQueryError, data: bookQueryData } = useQuery(getBookQuery, {
    variables: {
      id: book
    }
  })

  const displayBookDetails = () => {
     const { book } = bookQueryData
     if (book) { 
      return(
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map(book => {
              return <li key={book.id}>{book.name}</li>
            })}
          </ul>
        </div>
      )} else {
        return <div>Error:</div>
      }
  }

  return bookQueryData ?
    displayBookDetails() : <div>No book selected...</div>
}