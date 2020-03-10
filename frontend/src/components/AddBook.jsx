import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { getAuthorsQuery, AddBookMutation, getBooksQuery } from './../queries/queries'
import styled from 'styled-components'
import { PrimaryButton } from './shared/Button'


export default function AddBook() {
  const [ book, setBook ] = useState({})
  const { loading: authorsQueryLoading, error, data: authorsData } = useQuery(getAuthorsQuery)

  const [ addBook, { data } ] = useMutation(AddBookMutation, {
    variables: {
      name: book.name,
      genre: book.genre,
      authorId: book.authorId
    }, 
    refetchQueries: [{query: getBooksQuery}],
  })

  const displayAuthors = () => {
    if(authorsQueryLoading){
      return( <option disabled>Loading authors</option> )
    } else {
      return authorsData.authors.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
      ))
    }
  }

  const isDisabled = !book.name || !book.genre || !book.authorId

  const submitForm = (e) => {
    e.preventDefault()
    addBook()
    console.log(book)
  }

  return(
    <Form id="add-book" onSubmit={(e) => submitForm(e)}>
      <InputFieldWrapper className="field">
        <Label>Title:</Label>
        <Input type="text" onChange={(e) => setBook({...book, name: e.target.value})} />
      </InputFieldWrapper>
      <InputFieldWrapper className="field">
          <Label>Genre:</Label>
          <Input type="text" onChange={(e) => setBook({...book, genre: e.target.value})} />
      </InputFieldWrapper>
      <InputFieldWrapper className="field">
          <Label>Author:</Label>
          <select onChange={(e) => setBook({...book, authorId: e.target.value})}>
              <option>Select author</option>
              { displayAuthors() }
          </select>
      </InputFieldWrapper>
      <PrimaryButton title={'Add Book'} disabled={isDisabled} />
    </Form>
  )
}


const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  padding: 50px;
  margin-bottom: 60px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`

const InputFieldWrapper = styled.div`
  padding: 5px 0;
  width: 100%;
  display: flex;
`

const Input = styled.input`
  width: 100%;
`

const Label = styled.label`
  margin-right: 5px;
  font-size: 1.2em;
`