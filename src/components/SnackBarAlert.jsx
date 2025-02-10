import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackBarAlert({ handleSnackClose, snakebar }) {


      return (
            <div>
                  {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
                  <Snackbar open={snakebar.open} autoHideDuration={6000} onClose={handleSnackClose}>
                        <Alert
                              onClose={handleSnackClose}
                              severity={snakebar.type}
                              variant="filled"
                              sx={{ width: '100%' }}
                        >
                              {snakebar.message}
                        </Alert>
                  </Snackbar>
            </div>
      );
}
