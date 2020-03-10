import React from "react"
import styled from 'styled-components'

const Error = ({ message, touched }) => {
  if (!touched) {
    return <Div className="form-message invalid"></Div>
  }
  if (touched && message) {
    return <Div>{message}</Div>
  }
  return <Div></Div>
}

const Div = styled.div`
  color: rgba(255,147,1);
  display: flex;
  align-self: flex-start;
`

export default Error