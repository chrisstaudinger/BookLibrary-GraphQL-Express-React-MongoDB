import React, { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Button from './shared/Button'
import BookDetails from './BookDetails'
import { getBooksQuery } from './../queries/queries'

export default function BookList() {
  const [ selected, setSelected ] = useState(null)
  const { loading: booksQueryLoading, error: booksQueryError, data: BooksQueryData } = useQuery(getBooksQuery)

  async function handleDeleteBook(bookId) {
    console.log(`handleDeleteBook is deleting ${bookId}`)
  }

  const displayBooks = () => {
    return BooksQueryData ? 
    <ul>
      {BooksQueryData.books.map( book => (
        <Fragment key={book.id}>
          <li onClick={(e) => setSelected(book.id)}>{book.name}</li>
          <Button onClick={() => handleDeleteBook(book.id)} title={`Delete ${book.name}`} />
        </Fragment>
      ))}
    </ul> : <p>Loading ...</p>
  }

  if (booksQueryError) return <p>Error :</p>

  return(
    <>
      {displayBooks()}
      <BookDetails book={selected} />
    </>
  )
}