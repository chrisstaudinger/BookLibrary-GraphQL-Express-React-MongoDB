import { gql } from 'apollo-boost'

const getBooksQuery = gql`
  {
    books {
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

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

const AddBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`

export {
  getBooksQuery,
  getAuthorsQuery,
  AddBookMutation
}