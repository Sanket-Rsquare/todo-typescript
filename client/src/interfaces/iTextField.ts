import React from 'react'
import { iDisabled } from './iDisabledForm'
interface iTextField extends iDisabled {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
}
