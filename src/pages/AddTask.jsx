import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AddTask.css'

const AddTask = ({ setTaskList }) => {

    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [newPriority, setNewPriority] = useState('');


    const navigate = useNavigate();

    const submitTask = (e) => {
        e.preventDefault();

        const newTask = {
            id: new Date().getTime().toString(),
            title: newTitle,
            desc: newDesc,
            priority: newPriority,
            status: false
        }

        setTaskList((prevTaskList) => {
            const updatedTaskList = [...prevTaskList, newTask];

            updatedTaskList.sort((a, b) => {
                if (!a.priority) return 1;
                if (!b.priority) return -1;

                return a.priority - b.priority;
            })
            localStorage.setItem('taskItems', JSON.stringify(updatedTaskList));


            return updatedTaskList;
        });


        setNewTitle('');
        setNewDesc('');
        setNewPriority('');
        navigate('/')
    }


    return (
        <main className='addTaskWrapper'>
            <Typography variant='h3' marginBottom={3}>ADD TASK</Typography>
            <form action="#" onSubmit={submitTask} className='taskForm'>
                <TextField label="Task name" variant='outlined' fullWidth
                    margin="dense"
                    minRows={4}
                    color='primary'
                    type="text"
                    name="task"
                    value={newTitle}
                    id="task"
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                />
                {/* <br /> */}
                <TextField label="Description" variant='outlined' fullWidth
                    margin="dense"
                    color='primary'
                    multiline
                    rows={4}
                    type="text"
                    name="desc"
                    value={newDesc}
                    id="desc"
                    onChange={(e) => setNewDesc(e.target.value)}
                />

                {/* <br /> */}
                <FormControl fullWidth margin="dense">
                    <InputLabel id='newPriority'>Priority</InputLabel>
                    <Select
                        labelId='newPriority'
                        value={newPriority}
                        label='newPriority'
                        onChange={(e) => setNewPriority(e.target.value)}
                    >

                        <MenuItem value={3}>Low</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={1}>High</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' variant='contained' style={{ marginTop: "1rem" }} size='large' >Add Task</Button>
            </form>
        </main>
    )
}

export default AddTask