import { Box, Button, Container, FormControl, FormLabel, Grid2, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Test = () => {
      return (
            <>
                  <Container maxWidth="sm">
                        <Paper elevation={10} sx={{ p: 2 }}>
                              <Typography variant='h5' textAlign='center' sx={{ pt: 2 }} gutterBottom>User Profiles</Typography>
                              {/* <Box textAlign='center'>
                                    <Typography variant='body1'><span style={{ fontWeight: "bold" }}>Name: </span>man singh</Typography>
                                    <Typography variant='body1'><span style={{ fontWeight: "bold" }}>Age: </span>24</Typography>
                                    <Typography variant='body1'><span style={{ fontWeight: "bold" }}>Email: </span>test@gmail.com</Typography>
                                    <Button sx={{ mt: 2 }} variant='contained'>Edit Profile</Button>
                              </Box> */}

                              <Grid2 container spacing={2}>
                                    <Grid2 size={{ xs: 12 }}>
                                          <FormControl fullWidth>
                                                <FormLabel htmlFor='name'>Name: </FormLabel>
                                                <TextField fullWidth id="name" size="small" />
                                          </FormControl>
                                    </Grid2>

                                    <Grid2 size={{ xs: 12 }}>
                                          <FormControl fullWidth>
                                                <FormLabel htmlFor='age'>Age: </FormLabel>
                                                <TextField fullWidth id="age" size="small" />
                                          </FormControl>
                                    </Grid2>

                                    <Grid2 size={{ xs: 12 }}>
                                          <FormControl fullWidth>
                                                <FormLabel htmlFor='email'>Email: </FormLabel>
                                                <TextField fullWidth id="email" size="small" />
                                          </FormControl>
                                    </Grid2>

                                    <Grid2 size={{ xs: 12 }}>
                                          <Button variant='outlined'>Save</Button>
                                          <Button variant='contained' sx={{ ml: 2 }}>Cancel</Button>
                                    </Grid2>
                              </Grid2>
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
