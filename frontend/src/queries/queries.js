import { gql } from 'apollo-boost'

const getBooksQuery = gql`
  {
    books {
      name
      id
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

const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
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
  AddBookMutation,
  getBookQuery
}