import React from "react"
import styled from 'styled-components'

export default function Error({ message, touched }) {
  if (!touched) {
    return <Div className="form-message invalid"></Div>
  }
  if (touched && message) {
    return <Div>{message}</Div>
  }
  return <Div></Div>
}

const Div = styled.div`
  /* color: rgba(255,147,1); */
  color: red;
  display: flex;
  align-self: flex-start;
  margin: ${props => (props.touched && props.message) ? "-5px 0" : "0"};
`