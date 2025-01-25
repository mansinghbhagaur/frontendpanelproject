import { Button, Container, Grid2, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import { green, pink } from '@mui/material/colors';


const Login = () => {
      const [loginData, setLoginData] = useState({
            email: '',
            password: ''
      });

      const [error, setError] = useState({
            email: '',
            password: '',
            allFiled: ''
      });

      // console.table(error)

      const HandleChange = (e) => {

            const { name, value } = e.target;
            setLoginData((prev) => ({ ...prev, [name]: value }))
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            if (loginData.email.trim('') === '' || loginData.password.trim('') === '') return setError({ allFiled: 'Both Field Are Required' });
            console.table(loginData)
            setLoginData({ email: '', password: '' })
            setError({ allFiled: '' })
      }

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
                                                <TextField fullWidth label='Email' variant='outlined' size='small' name="email" value={loginData.email} onChange={(e) => HandleChange(e)} />
                                          </Grid2>

                                          <Grid2 size={{ xs: 12, sm: 12 }}>
                                                <TextField fullWidth label='password' variant='outlined' size='small' name='password' value={loginData.password} onChange={(e) => HandleChange(e)} />
                                          </Grid2>

                                          <Grid2 size={{ xs: 6, }} sx={{ textAlign: 'start', }}>
                                                <Typography variant='body2' mb={1}>Forget Password?</Typography>
                                                <Typography variant='body2'>Create new Account/signup</Typography>
                                          </Grid2>

                                          <Grid2 size={{ xs: 6, }} sx={{ textAlign: 'end' }}>
                                                <Button variant='outlined' size='small' type='submit'>Login</Button>
                                          </Grid2>

                                          {error && <Typography variant='body2' sx={{ textAlign: 'center', width: "100%" }} color='error'>{error.allFiled}</Typography>}

                                    </Grid2>
                              </form>
                        </Paper>
                  </Container >
            </>
      )
}

export default Login
