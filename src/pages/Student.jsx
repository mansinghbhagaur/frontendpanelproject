import React, { useState } from 'react'
import BasicDialogBox from '../components/BasicDialogBox'
import { Button } from '@mui/material';
import StudentForm from '../components/form/StudentForm';

const Student = () => {
      const [open, setOpen] = React.useState(false);
      const [selectedRow, setSelectedRow] = useState(null);

      const handleClickOpen = () => {
            setOpen(true);
      };
      const handleClose = () => {
            setOpen(false);
      };

      return (
            <div>
                  <h1>Student</h1>
                  <Button variant="outlined" onClick={handleClickOpen}>
                        Open dialog
                  </Button>

                  <BasicDialogBox handleClose={handleClose} width="sm" open={open} formId="student" title={selectedRow ? 'Update Student Form' : 'Create Student Form'} selectedRow={selectedRow}>
                        <StudentForm formId="student" setOpen={setOpen} />
                  </BasicDialogBox>
            </div>
      )
}

export default Student
