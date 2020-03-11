import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBookQuery } from './../queries/queries'
import styled from 'styled-components'

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
        <>
          <Heading>Book Information</Heading>
          <BookDetailsContainer>
            <BookDetailsWrapper>
            <h3>Title: {book.name}</h3>
            <h3>Genre: {book.genre}</h3>
            <h3>Author: {book.author.name}</h3>
            </BookDetailsWrapper>
            <AllBookByAuthor>
              <h3>All books by this author:</h3>
              <ul className="other-books">
                {book.author.books.map(book => {
                  return <ListItem key={book.id}>{book.name}</ListItem>
                })}
              </ul>
            </AllBookByAuthor>
          </BookDetailsContainer>
        </>
      )} else {
        return <div>Error:</div>
      }
  }

  return bookQueryData ?
    displayBookDetails() : <>
      <Heading>Book Information</Heading>
      <NoSelection>No book selected...</NoSelection>
    </>
}

const BookDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100%;
  color: #000;
  padding-bottom: 50px;
  @media (max-width: 568px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Heading = styled.h2`
  text-align: center;
  padding: 0 0 30px;
  color: #000;
  font-size: 2em;
`

const BookDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
  padding-right: 25px;
`

const AllBookByAuthor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 25px;
  @media (max-width: 568px) {
    padding-left: 0;
  }
`

const ListItem = styled.li`
  list-style: none;
  max-width: 350px;
`

const NoSelection = styled.div`
  margin-bottom: 50px;
  color: #000;
`