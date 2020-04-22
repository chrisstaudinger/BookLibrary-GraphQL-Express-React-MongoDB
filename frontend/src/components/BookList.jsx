import React, { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import BookDetails from './BookDetails'
import { getBooksQuery } from './../queries/queries'
import styled from 'styled-components'

export default function BookList() {
  const [ selected, setSelected ] = useState(null)
  const { loading: booksQueryLoading, error: booksQueryError, data: BooksQueryData } = useQuery(getBooksQuery)

  const displayBooks = () => {
    return BooksQueryData ?
    <> 
      <Heading>Reading List</Heading>
      <BookListWrapper>
        {BooksQueryData.books.map( book => (
          <Fragment key={book.id}>
            <ListItem onClick={(e) => setSelected(book.id)}>{book.name}</ListItem>
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
  color: #000;
  @media (max-width: 568px) {
    font-size: 2.5em;
  }
` 

const BookListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 80px 50px;
  @media (max-width: 768px) {
    padding: 0 0px 50px;
  }
`

const ListItem = styled.li`
  background: transparent;
  background-color: #83A9A6;
  color: #000;
  margin: 10px;
  padding: 0.5em 1em;
  list-style: none;
  text-align: center;
  cursor: pointer;
  min-width: 180px;
  max-width: 300px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
  &:hover {
    background: #009688;
  }
`

