import React, { useEffect } from 'react'
import TextInputField from '../input/TextInputField'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Typography } from '@mui/material';


const validateSchema = Yup.object().shape({
      name: Yup.string().min(2).required("name jaruri hai"),
      // email: Yup.string().required("Email is required").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      //       'Invalid email address'),
})


const FormikForm = ({ formId, initialValue = '', setOpen, dispatch }) => {
      // console.log(Yup, 'Yup')
      const { handleSubmit, handleChange, values, setValues, resetForm, errors, } = useFormik({
            initialValues: {
                  name: '',
                  email: '',
            },
            validationSchema: validateSchema,
            onSubmit: (values) => {
                  console.log(values);
                  dispatch({ type: 'EDIT_STUDENT', payload: values })// dispatch action to edit student
                  setOpen(false);
            }
      });

      console.table(errors, "error")
      useEffect(() => {
            if (initialValue !== '') {
                  setValues({ ...initialValue })
            }
      }, [initialValue, setValues])

      // console.log(formik, "formik")
      return (
            <form onSubmit={handleSubmit} id={formId}>
                  <TextInputField label='Name' textPropsValue={{
                        id: 'name',
                        size: 'small',
                        name: 'name',
                        value: values.name,
                        // value: formik.initialValues.name,
                        onChange: handleChange,
                        // value: 'sidharth'
                  }} />
                  {errors && <Typography variant="body2" color='error'>{errors.name}</Typography>}
                  <TextInputField label='Email' textPropsValue={{
                        id: 'email',
                        size: 'small',
                        // type: 'email',
                        name: 'email',
                        value: values.email,
                        onChange: handleChange,

                  }} />
                  {errors && <Typography variant="body2" color='error'>{errors.email}</Typography>}
            </form>
      )
}

export default FormikForm
