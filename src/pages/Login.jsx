import { Button, Container, FormControl, FormHelperText, FormLabel, Grid2, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import { green, pink } from '@mui/material/colors';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navigate } from 'react-router';

const Login = () => {
      const nevigate = useNavigate();

      // const formik = useFormik({});

      const validationSchema = Yup.object().shape({
            email: Yup.string().required().min('2').max('50', 'Too Long!').email('Invalid email').matches(),
            password: Yup.string().required().min('6').max('20'),
            // selected: Yup.string().required()
      })

      const { handleChange, handleSubmit, values, errors, handleBlur, touched } = useFormik({
            initialValues: {
                  email: '',
                  password: '',
                  // selected: ''
            },
            validationSchema,
            onSubmit: (values, { resetForm }) => {
                  console.log(values);
                  nevigate("/dashboard")
                  resetForm();
            },
            validateOnChange: true,
            validateOnBlur: true,
      });

      console.table(errors)



      // const [loginData, setLoginData] = useState({
      //       email: '',
      //       password: ''
      // });

      // const [error, setError] = useState({
      //       email: '',
      //       password: '',
      //       allFiled: ''
      // });

      // // console.table(error)

      // const HandleChange = (e) => {

      //       const { name, value } = e.target;
      //       setLoginData((prev) => ({ ...prev, [name]: value }))
      // }

      // const handleSubmit = (e) => {
      //       e.preventDefault();

      //       if (loginData.email.trim('') === '' || loginData.password.trim('') === '') return setError({ allFiled: 'Both Field Are Required' });
      //       console.table(loginData)
      //       setLoginData({ email: '', password: '' })
      //       setError({ allFiled: '' })
      //       nevigate('/dashboard');

      // }



      return (
            <>
                  <Container maxWidth='sm'>
                        <Paper elevation={15} sx={{ p: 5, mt: 25 }}>
                              <Stack direction="column" spacing={0.5} sx={{ pb: 2, display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ bgcolor: pink[500] }}>
                                          <LockIcon />
                                    </Avatar>
                                    <Typography>Login</Typography>
                              </Stack>

                              <form onSubmit={handleSubmit}>
                                    <Grid2 container spacing={2}>
                                          <Grid2 size={{ xs: 12, sm: 12 }}>
                                                <TextField onBlur={handleBlur} error={Boolean(touched.email && errors.email)} helperText={touched.email && errors.email} fullWidth label='Email' variant='outlined' size='small' name="email" value={values.email} onChange={handleChange} />
                                          </Grid2>

                                          <Grid2 size={{ xs: 12, sm: 12 }}>
                                                <TextField fullWidth onBlur={handleBlur} error={Boolean(touched.password && errors.password)} helperText={touched.password && errors.password} label='password' variant='outlined' size='small' name='password' value={values.password} onChange={handleChange} />
                                          </Grid2>

                                          {/* <Grid2 size={{ xs: 12 }}>
                                                <FormControl fullWidth size='small'>
                                                      <FormLabel error={Boolean(touched.selected && errors.selected)} > Select</FormLabel>
                                                      <Select error={Boolean(touched.selected && errors.selected)} name='selected' value={values.selected || ""} displayEmpty onChange={handleChange}>
                                                            <MenuItem value="">Select</MenuItem>
                                                            <MenuItem value="1">select 1</MenuItem>
                                                            <MenuItem value="2">select 2</MenuItem>
                                                            <MenuItem value="3">select 3</MenuItem>
                                                      </Select>
                                                      <FormHelperText error={Boolean(touched.selected && errors.selected)}>{touched.selected && errors.selected}</FormHelperText>
                                                </FormControl>
                                          </Grid2> */}

                                          <Grid2 size={{ xs: 12, }} sx={{ textAlign: 'end' }}>
                                                <Button variant='contained' size='small' fullWidth type='submit' sx={{ background: '#f05' }}>Login</Button>
                                          </Grid2>

                                          <Grid2 size={{ xs: 12, }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography variant='body2' mb={1}>Forget Password?</Typography>
                                                <Typography variant='body2'>Create new Account/signup</Typography>
                                          </Grid2>



                                    </Grid2>
                              </form>
                        </Paper>
                  </Container >
            </>
      )
}

export default Login

