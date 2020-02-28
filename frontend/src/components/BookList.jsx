import React, { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
// import Button from './shared/Button'
import BookDetails from './BookDetails'
import { getBooksQuery } from './../queries/queries'
import styled from 'styled-components'

export default function BookList() {
  const [ selected, setSelected ] = useState(null)
  const { loading: booksQueryLoading, error: booksQueryError, data: BooksQueryData } = useQuery(getBooksQuery)

  // async function handleDeleteBook(bookId) {
  //   console.log(`handleDeleteBook is deleting ${bookId}`)
  // }

  const displayBooks = () => {
    return BooksQueryData ?
    <> 
      <Heading>Reading List</Heading>
      <BookListWrapper>
        {BooksQueryData.books.map( book => (
          <Fragment key={book.id}>
            <ListItem onClick={(e) => setSelected(book.id)}>{book.name}</ListItem>
            {/* <Button onClick={() => handleDeleteBook(book.id)} title={`Delete ${book.name}`} /> */}
          </Fragment>
        ))}
      </BookListWrapper>
    </> : <p>Loading ...</p>
  }

  if (booksQueryError) return <p>Error :</p>

  return(
    <>
      {displayBooks()}
      <BookDetails book={selected} />
    </>
  )
}

const Heading = styled.div`
  font-size: 3.5em;
  padding: 60px 0; 
  color: #fff;
` 

const BookListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 40px 50px;

`

const ListItem = styled.li`
  background: transparent;
  border-radius: 2.5px;
  /* border: 2px solid #000; */
  background-color: #fff;
  color: #000;
  margin: 10px;
  padding: 0.25em 1em;
  list-style: none;
  text-align: center;
  cursor: pointer;
  min-width: 150px;
  max-width: 150px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

