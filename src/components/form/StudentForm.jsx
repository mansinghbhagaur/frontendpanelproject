import { Grid2, TextField } from '@mui/material'
import React, { useState } from 'react'

const StudentForm = ({ formId, setOpen, dispatch, initialValue = {} }) => {
      const initialState = {
            name: initialValue.name || '',
            email: initialValue.email || ''
      };

      const [formData, setFormData] = useState(initialState);


      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }))
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            if (initialValue) {
                  dispatch({ type: 'EDIT_STUDENT', payload: { id: initialValue.id, ...formData } })// Update existing student
            } else {
                  dispatch({ type: 'ADD_STUDENT', payload: formData });// dispatch action to add student
            }

            setOpen(false)
            setFormData(initialState)
      }

      return (
            <form id={formId} onSubmit={handleSubmit}>
                  <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12 }}>
                              <TextField fullWidth label="name" name="name" size='small' value={formData.name} onChange={(e) => handleChange(e)} />
                        </Grid2>

                        <Grid2 size={{ xs: 12 }}>
                              <TextField fullWidth label="email" name="email" size='small' value={formData.email} onChange={(e) => handleChange(e)} />
                        </Grid2>
                  </Grid2>
            </form>
      )
}

export default StudentForm
