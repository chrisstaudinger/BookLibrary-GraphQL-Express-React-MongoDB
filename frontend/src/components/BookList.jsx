import React, { Fragment } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Button from './shared/Button'

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`

const deleteBookMutation = gql`
  mutation {
    deleteBook(id: 1) {
      id
      name
      author {
        name
      }
    }
  }
`

export default function BookList() {
  const { loading: queryLoading, error, data: queryData } = useQuery(getBooksQuery)


  // const [deleteBook, {loading: mutationLoading, error, data: mutationData}] = useMutation(deleteBookMutation)
  // console.log(data)

  async function handleDeleteBook(bookId) {
    // try {
    // setButtonDisabled(!buttonDisabled)
    //   await deleteBook(bookId)
    // setButtonDisabled(!buttonDisabled)
    // } catch (error) {
    //   console.log(error)
    //   return error
    // }
    console.log(`handleDeleteBook is deleting ${bookId}`)
    // setButtonDisabled(!buttonDisabled)
  }

  if (error) return <p>Error :</p>

  // return (
  //   <>
  //     {
  //       data ? (
  //         <ul>
  //         {data.books.map( book => (
  //           <li key={book.id}>{book.name}</li>
  //         ))}
  //       </ul> : (
  //         <p>Loading ...</p>
  //       )
  //       )
  //     }
  //   </>
  // )

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