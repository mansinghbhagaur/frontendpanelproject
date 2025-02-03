import React from 'react'
import { FormControl, FormLabel, Select, TextField } from '@mui/material'

const TextInputField = ({ textPropsValue = {}, label }) => {
      return (
            <FormControl fullWidth>
                  <FormLabel htmlFor={textPropsValue.id}>{label}</FormLabel>
                  <TextField {...textPropsValue} />
            </FormControl>
      )
}

export default TextInputField
