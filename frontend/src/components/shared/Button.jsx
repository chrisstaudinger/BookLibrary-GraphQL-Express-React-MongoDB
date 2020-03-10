import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const BaseButton = styled.button.attrs(props => ({
  cursor: props.disabled ? 'default' : 'pointer',
}))`
  padding: 15px;
  border-radius: 15px;
  border: 3px solid #fff;
  color: #fff;
  font-size: 1.3em;
  margin: 30px 30px 0;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  background: ${props => props.disabled ? "linear-gradient(135deg, rgba(255,147,0.3) 0%, rgba(250,0,255,0.3) 100%)"
  : "linear-gradient(135deg, rgba(255,147,1) 0%, rgba(250,0,255,1) 100%)"};
`

function PrimaryButton({ title, disabled }) {
  return <BaseButton disabled={disabled}>{title}</BaseButton>
}

export {PrimaryButton}