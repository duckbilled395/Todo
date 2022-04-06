import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import './DisplayTodo.css';

const DisplayTodo = ({
                         isOpen,
                         formData,
                         handleCloseButton,
                         handleEditTodo,
                         handleRemoveTodo
                     }) => {
    return (
        <Dialog open={isOpen} onClose={handleCloseButton}>
            <DialogTitle>Add new Todo</DialogTitle>

            <DialogContent>

            </DialogContent>

            <DialogActions>
                <div>
                    <Button color='primary' variant='outlined' onClick={() => {handleRemoveTodo()}}>Remove</Button>


                    <div>
                        <Button color='primary' onClick={() => {handleCloseButton()}}>Close</Button>
                        <Button color='primary' onClick={() => {handleEditTodo()}}>Edit</Button>
                    </div>
                </div>

            </DialogActions>
        </Dialog>
    )
}

export default DisplayTodo;
