import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

function DeleteBookButton({ title, modalMode, onClick, ...props }) {
  const [ buttonDisabled, setButtonDisabled ] = useState(false)
  return(
  <DeleteButton disabled={buttonDisabled} onClick={() => {
    onClick()
    setButtonDisabled(true)
  }} {...props}>{title}</DeleteButton>
  )
}

const DeleteButton = styled.button`
  &:disabled {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  }
`

const BaseButton = styled.button`
  padding: 15px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(255,147,1) 0%, rgba(250,0,255,1) 100%);
  border: 3px solid #fff;
  color: #fff;
  font-size: 1.3em;
  margin: 30px 30px 0;
  cursor: pointer;
`

function PrimaryButton({ title, ...props }) {
  return <BaseButton>{title}</BaseButton>
}

export {PrimaryButton}