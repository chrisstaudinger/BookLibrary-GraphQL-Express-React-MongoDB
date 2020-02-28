import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import styled from 'styled-components'

import BookList from './components/BookList'
import AddBook from './components/AddBook'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

export default function App () {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <BookList />
        <AddBook />
        {/* <Footer /> */}
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

// const Footer = styled.footer`
//   position: fixed;
//   width: 100%;
//   left: 0;
//   bottom: 0;
//   background: #efefef;
//   background: linear-gradient(135deg, rgba(255,147,0.5) 0%, rgba(250,0,255,0.5) 100%);
// `
