import React, { useState } from 'react'
import BasicDialogBox from '../components/BasicDialogBox'
import { Button } from '@mui/material';
import StudentForm from '../components/form/StudentForm';
import { ReusabeTable } from '../components/table/ReusableTable';
import { useLocalStorageHook } from '../hooks/useLocalStorageHook';
import { studentReducer } from '../reducer/studentReducer';
import { Delete, Edit } from '@mui/icons-material';
import FormikForm from '../components/form/FormikForm';
import SnackBarAlert from '../components/SnackBarAlert';
import BasicConfirmBox from '../components/BasicConfirmBox';

const Student = () => {
      const [open, setOpen] = React.useState(false);
      const [selectedRow, setSelectedRow] = useState('');
      const [state, dispatch] = useLocalStorageHook('students', studentReducer, []);

      const [snakebar, setSnakeBar] = useState({ type: "success", open: false, message: '' });


      const handleSnackClose = () => {
            setSnakeBar({ type: "success", open1: false, message: '' })
      };

      const handleClickOpen = () => {
            setOpen(true);
      };
      const handleClose = () => {
            setOpen(false);
      };

      const column = [
            { field: 'id', headerName: 'ID' },
            { field: 'name', headerName: 'Name' },
            { field: 'email', headerName: 'Email' },
      ]

      const actions = [
            {
                  icon: <Edit />,
                  onClick: (row) => { setSelectedRow(row), setOpen(true) },
            },
            {
                  icon: <Delete />,
                  onClick: (row) => dispatch({ type: 'DELETE_STUDENT', payload: row })
            }
      ]

      return (
            <div>
                  <h1>Student</h1>
                  <Button variant="outlined" onClick={() => { handleClickOpen(), setSelectedRow('') }}>
                        Open dialog
                  </Button>

                  <BasicDialogBox handleClose={handleClose} width="sm" open={open} formId="student" title={selectedRow ? 'Update Student Form' : 'Create Student Form'} selectedRow={selectedRow}>
                        {/* <StudentForm formId="student" setOpen={setOpen} initialValue={selectedRow} dispatch={dispatch} /> */}
                        <FormikForm setOpen={setOpen} setSnakeBar={setSnakeBar} formId='student' initialValue={selectedRow} dispatch={dispatch} />
                  </BasicDialogBox>

                  <ReusabeTable width='xl' columns={column} rows={state} actions={actions} dynamicHeaderStyle={true} />
                  <SnackBarAlert handleSnackClose={handleSnackClose} snakebar={snakebar} />
                  <BasicConfirmBox open={open} />
            </div>
      )
}

export default Student
