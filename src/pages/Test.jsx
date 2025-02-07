import { Box, Button, Container, FormControl, FormLabel, Grid2, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { use } from 'react';

const Test = () => {

      const [open, setOpen] = useState(false);
      const [userData, setUserData] = useState([])
      const [inputData, setInputData] = useState({
            name: "",
            email: "",
            phone: ""
      })

      const apiData = () => {
            axios.get('https://jsonplaceholder.typicode.com/users/1')
                  .then((res) => (setUserData(res.data),
                        setInputData({
                              name: res.data.name,
                              email: res.data.email,
                              phone: res.data.phone
                        }))

                  )
      }
      console.log(userData.name)
      useEffect(() => {
            apiData()
      }, [])



      const handaleChange = (e) => {
            const { name, value } = e.target;
            setInputData((prev) => ({ ...prev, [name]: value }))
            console.log(inputData)

      }

      const handleSubmit = (e) => {
            e.preventDefault()
            setUserData(inputData);
            console.log(userData)
            setOpen(false)

      }

      return (
            <>
                  <Container maxWidth="sm">

                        <Paper elevation={10} sx={{ p: 2 }}>
                              <Typography variant='h5' textAlign='center' sx={{ pt: 2 }} gutterBottom>User Profiles</Typography>
                              {!open && <Box textAlign='center'>
                                    <Typography variant='body1'><span style={{ fontWeight: "bold" }}>Name: {userData.name}</span></Typography>
                                    <Typography variant='body1'><span style={{ fontWeight: "bold" }}>Age: </span>{userData.phone}</Typography>
                                    <Typography variant='body1'><span style={{ fontWeight: "bold" }}>Email: </span>{userData.email}</Typography>
                                    <Button sx={{ mt: 2 }} variant='contained' onClick={() => setOpen(true)}>Edit Profile</Button>
                              </Box>
                              }

                              {open &&

                                    <form onSubmit={handleSubmit}>


                                          <Grid2 container spacing={2}>

                                                <Grid2 size={{ xs: 12 }}>
                                                      <FormControl fullWidth>
                                                            <FormLabel htmlFor='name'>Name: </FormLabel>
                                                            <TextField
                                                                  fullWidth
                                                                  id="name"
                                                                  size="small"
                                                                  name='name'
                                                                  value={inputData.name}
                                                                  onChange={(e) => { handaleChange(e) }}
                                                            />

                                                      </FormControl>
                                                </Grid2>

                                                <Grid2 size={{ xs: 12 }}>
                                                      <FormControl fullWidth>
                                                            <FormLabel htmlFor='phone'>Phone: </FormLabel>
                                                            <TextField fullWidth id="phone" size="small" name='phone' value={inputData.phone} onChange={(e) => { handaleChange(e) }} />

                                                      </FormControl>
                                                </Grid2>

                                                <Grid2 size={{ xs: 12 }}>
                                                      <FormControl fullWidth>
                                                            <FormLabel htmlFor='email'>Email: </FormLabel>
                                                            <TextField fullWidth id="email" size="small" name='email' value={inputData.email}
                                                                  onChange={(e) => { handaleChange(e) }} />
                                                      </FormControl>
                                                </Grid2>

                                                <Grid2 size={{ xs: 12 }}>
                                                      <Button type='submit' variant='outlined'  >Save</Button>
                                                      <Button variant='contained' sx={{ ml: 2 }}>Cancel</Button>
                                                </Grid2>
                                          </Grid2>
                                    </form>
                              }
                        </Paper>
                  </Container>
            </>

      )
}

export default Test



// Create a user profile page with React.
// Your app should:

// Display user information like name, age, and email.
// Allow the user to edit and update their profile information.
// Show a loading spinner while the data is being fetched (use a mock API).
