import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Container, Grid2, TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
      '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
      },
      '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
      },
}));


const BasicDialogBox = ({ open, handleClose, title, selectedRow, children, formId, width }) => {

      return (
            <React.Fragment>
                  <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        maxWidth={width}
                        fullWidth
                  >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                              {title}
                        </DialogTitle>
                        <IconButton
                              aria-label="close"
                              onClick={handleClose}
                              sx={(theme) => ({
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: theme.palette.grey[500],
                              })}
                        >
                              <CloseIcon />
                        </IconButton>
                        <DialogContent dividers>
                              {children}
                        </DialogContent>
                        <DialogActions>
                              <Button autoFocus form={formId} type='submit'>
                                    {selectedRow ? "Update" : "Create"}
                              </Button>
                        </DialogActions>
                  </BootstrapDialog>
            </React.Fragment>
      )
}

export default BasicDialogBox
