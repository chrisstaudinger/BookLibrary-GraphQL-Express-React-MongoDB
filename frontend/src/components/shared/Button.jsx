import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const BaseButton = styled.button`
  &:disabled {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  }
`

export default function Button({ title, modalMode, onClick, ...props }) {
  const [ buttonDisabled, setButtonDisabled ] = useState(false)
  return(
  <BaseButton disabled={buttonDisabled} onClick={() => {
    onClick()
    setButtonDisabled(true)
  }} {...props}>{title}</BaseButton>
  )
}