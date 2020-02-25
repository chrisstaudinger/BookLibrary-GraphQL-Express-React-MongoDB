import React, { Fragment } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Button from './shared/Button'
import { getBooksQuery } from './../queries/queries'

export default function BookList() {
  const { loading: queryLoading, error, data: queryData } = useQuery(getBooksQuery)

  async function handleDeleteBook(bookId) {
    // try {
    //   await deleteBook(bookId)
    // } catch (error) {
    //   console.log(error)
    //   return error
    // }
    console.log(`handleDeleteBook is deleting ${bookId}`)
  }

  if (error) return <p>Error :</p>

  const style = {
    backgroundColor: 'orange',
    ':disabled': {
      backgroundColor: '#222'
    }
  }

  return queryData ? 
    <ul>
      {queryData.books.map( book => (
        <Fragment key={book.id}>
          <li>{book.name}</li>
          <Button style={ style }  onClick={() => handleDeleteBook(book.id)} title={`Delete ${book.name}`} />
        </Fragment>
      ))}
    </ul> : <p>Loading ...</p>
}