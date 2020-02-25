import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { getAuthorsQuery, AddBookMutation, getBooksQuery } from './../queries/queries'


export default function AddBook() {
  const [ book, setBook ] = useState({})
  const { loading: authorsQueryLoading, error, data: authorsData } = useQuery(getAuthorsQuery)

  const [ addBook, { data } ] = useMutation(AddBookMutation, {
    variables: {
      name: book.name,
      genre: book.genre,
      authorId: book.authorId
    }, 
    refetchQueries: [{query: getBooksQuery}]
  })

  const displayAuthors = () => {
    if(authorsQueryLoading){
      return( <option disabled>Loading authors</option> )
    } else {
      return authorsData.authors.map(author => (
        <option key={ author.id } value={author.id}>{ author.name }</option>
      ))
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    addBook()
    console.log(book)
  }

  return(
    <form id="add-book" onSubmit={(e) => submitForm(e)}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e) => setBook({...book, name: e.target.value})} />
      </div>
      <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setBook({...book, genre: e.target.value})} />
      </div>
      <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setBook({...book, authorId: e.target.value})}>
              <option>Select author</option>
              { displayAuthors() }
          </select>
      </div>
      <button>+</button>
    </form>
  )
}