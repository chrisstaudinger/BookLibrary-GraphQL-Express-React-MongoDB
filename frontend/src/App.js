import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import styled from 'styled-components'

import BookList from './components/BookList'
import AddBook from './components/AddBook'

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_URL}`
})

export default function App () {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <BookList />
        <AddBook />
      </AppContainer>
    </ApolloProvider>
  )
}

const AppContainer = styled.div`
  height: 100%;
  width: 100vw;
  padding: 0 15vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
