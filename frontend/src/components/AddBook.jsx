import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { getAuthorsQuery, AddBookMutation, getBooksQuery } from './../queries/queries'
import styled from 'styled-components'
import { PrimaryButton } from './shared/Button'
import Error from "./Error";


export default function AddBook() {
  const [ book, setBook ] = useState({})
  const [errors, setErrors] = useState({});
  const [ isTouched, setIsTouched ] = useState({})
  const { loading: authorsQueryLoading, error, data: authorsData } = useQuery(getAuthorsQuery)

  useEffect(() => {
    setErrors(validateInputs(book));
  }, [book]);
  
  const [ addBook, { data } ] = useMutation(AddBookMutation, {
    variables: {
      name: book.name,
      genre: book.genre,
      authorId: book.authorId
    }, 
    refetchQueries: [{query: getBooksQuery}],
  })
  
  const isDisabled = !book.name || !book.genre || !book.authorId

  const validateInputs = (values) => {
    let errors = {}
    if (!values.name) {
      errors.name = "Required"
    }
    if (!values.genre) {
      errors.genre = "Required"
    }
    if (!values.authorId) {
      errors.authorId = "Required"
    }
    return errors;
  }

  const displayAuthors = () => {
    if(authorsQueryLoading){
      return( <option disabled>Loading authors</option> )
    } else {
      return authorsData.authors.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
      ))
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    addBook()
    console.log(book)
  }

  return(
    <Form id="add-book" onSubmit={(e) => submitForm(e)}>
      <InputFieldWrapper>
        <Label htmlFor="title">Title:&nbsp;</Label>
        <Input type="text" id="title" onChange={(e) => setBook({...book, name: e.target.value})} onBlur={() => setIsTouched({...isTouched, name: true})} />
      </InputFieldWrapper>
      <Error message={errors.name} touched={isTouched.name} />
      <InputFieldWrapper>
          <Label htmlFor="genre">Genre:&nbsp;</Label>
          <Input type="text" id="genre" onChange={(e) => setBook({...book, genre: e.target.value})} onBlur={() => setIsTouched({...isTouched, genre: true})} />
      </InputFieldWrapper>
      <Error message={errors.genre} touched={isTouched.genre} />
      <InputFieldWrapper>
          <Label htmlFor="author">Author:&nbsp;</Label>
          <Select id="author" onChange={(e) => setBook({...book, authorId: e.target.value})} onBlur={() => setIsTouched({...isTouched, authorId: true})} >
              <option>Select author</option>
              { displayAuthors() }
          </Select>
      </InputFieldWrapper>
      <Error message={errors.authorId} touched={isTouched.authorId} />
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
  background-color: #FFF;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
  @media (max-width: 768px) {
    width: 400px;
    padding: 35px;
  }
  @media (max-width: 414px) {
    width: 300px;
    padding: 20px;
  }
`

const InputFieldWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
`

const Label = styled.label`
  margin-right: 5px;
  font-size: 1.2em;
`

const Input = styled.input`
  width: 100%;
  &:focus {
    outline: solid 4px #80CBC4;
  }
`

const Select = styled.select`
  &:focus {
    outline: solid 4px #80CBC4;
  }
`
