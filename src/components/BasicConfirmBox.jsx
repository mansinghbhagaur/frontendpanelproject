import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BasicConfirmBox({ handleClose, open, row, dispatch }) {
      // const [open, setOpen] = React.useState(false);

      // const handleClickOpen = () => {
      //       setOpen(true);
      // };

      // const handleClose = () => {
      //       setOpen(false);
      // };

      return (
            <React.Fragment>
                  {/* <Button variant="outlined" onClick={handleClickOpen}>
                        Open alert dialog
                  </Button> */}
                  <Dialog
                        open={open}
                        // fullScreen
                        fullWidth="sm"
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                  >
                        <DialogTitle id="alert-dialog-title">
                              {row.id} {row.name}
                        </DialogTitle>
                        <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                    kya aap isko delete karna chahte hain
                              </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                              <Button onClick={handleClose}>Disagree</Button>
                              <Button onClick={() => { dispatch({ type: 'DELETE_STUDENT', payload: row }), handleClose() }} autoFocus>
                                    Agree
                              </Button>
                        </DialogActions>
                  </Dialog>
            </React.Fragment>
      );
}
