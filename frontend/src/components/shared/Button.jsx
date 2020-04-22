import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const BaseButton = styled.button`
  padding: 15px;
  border-radius: 15px;
  border: 3px solid #fff;
  color: #fff;
  font-size: 1.3em;
  margin: 30px 30px 0;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  background-color: ${props => props.disabled ? "#FFE082"
  : "#FFC107"};
`

function PrimaryButton({ title, disabled }) {
  return <BaseButton disabled={disabled}>{title}</BaseButton>
}

export {PrimaryButton}