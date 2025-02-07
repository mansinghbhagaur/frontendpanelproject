import { Button, Container, Grid2, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import { green, pink } from '@mui/material/colors';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
      // const nevigate = useNavigate();

      // const formik = useFormik({});

      const validationSchema = Yup.object().shape({
            email: Yup.string().required().min('2').max('50', 'Too Long!').email('Invalid email'),
            password: Yup.string().required().min('6').max('20')
      })

      const { handleChange, handleSubmit, values, errors } = useFormik({
            initialValues: {
                  email: '',
                  password: ''
            },
            validationSchema,
            onSubmit: (values, { resetForm }) => {
                  console.log(values);
                  resetForm();
            }
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
                                                <TextField error={errors.email} helperText={errors.email} fullWidth label='Email' variant='outlined' size='small' name="email" value={values.email} onChange={handleChange} />
                                          </Grid2>

                                          <Grid2 size={{ xs: 12, sm: 12 }}>
                                                <TextField fullWidth error={errors.password} helperText={errors.password} label='password' variant='outlined' size='small' name='password' value={values.password} onChange={handleChange} />
                                          </Grid2>

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
