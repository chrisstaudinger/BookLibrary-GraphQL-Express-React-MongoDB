import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const BaseButton = styled.button.attrs(props => ({
  cursor: props.disabled ? 'default' : 'pointer',
}))`
  padding: 15px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(255,147,1) 0%, rgba(250,0,255,1) 100%);
  border: 3px solid #fff;
  color: #fff;
  font-size: 1.3em;
  margin: 30px 30px 0;
  cursor: ${props => props.disabled ? "default" : "pointer"};
`

function PrimaryButton({ title, disabled }) {
  return <BaseButton disabled={disabled}>{title}</BaseButton>
}

export {PrimaryButton}