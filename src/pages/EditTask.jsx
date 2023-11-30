import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = ({ taskList, setTaskList }) => {
  const navigate = useNavigate();
  const { '*': params } = useParams();
  const [title, desc, priority, id] = params.split('/').map(param => param ? decodeURIComponent(param) : null);

  console.log('Title:', title);
  console.log('Description:', desc);
  console.log('Priority:', priority);
  console.log('ID:', id);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDesc, setEditedDesc] = useState(desc);
  const [editedPriority, setEditedPriority] = useState(priority);


  const submitTask = (e) => {
    e.preventDefault();

    const updatedTasks = taskList.filter(task => task.id !== id);
    setTaskList(updatedTasks);
    const editedTask = {
      id: new Date().getTime().toString(),
      title: editedTitle,
      desc: editedDesc,
      priority: parseInt(editedPriority)
    }

    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList, editedTask];

      updatedTaskList.sort((a, b) => {
        if (!a.priority) return 1;
        if (!b.priority) return -1;

        return a.priority - b.priority;
      })
      localStorage.setItem('taskItems', JSON.stringify(updatedTaskList));


      return updatedTaskList;
    });

    setEditedTitle('')
    setEditedDesc('')
    setEditedPriority('')

    navigate('/')
  }


  return (
    <div>
      <Typography variant='h3'>Edit TASK</Typography>
      <form action="#" onSubmit={submitTask}>
        <TextField label="Task name" variant='outlined'
          minRows={4}
          color='primary'
          type="text"
          name="task"
          value={editedTitle}
          id="task"
          onChange={(e) => setEditedTitle(e.target.value)}
          required
        />
        <TextField label="Description" variant='outlined'
          color='primary'
          multiline
          rows={4}
          type="text"
          name="desc"
          value={editedDesc}
          id="desc"
          onChange={(e) => setEditedDesc(e.target.value)}
        />

        <br />
        <FormControl fullWidth>
          <InputLabel id='newPriority'>Priority</InputLabel>
          <Select
            labelId='newPriority'
            value={editedPriority}
            label='newPriority'
            onChange={(e) => setEditedPriority(e.target.value)}
          >
            <MenuItem value={3}>Low</MenuItem>
            <MenuItem value={2}>Medium</MenuItem>
            <MenuItem value={1}>High</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button type='submit' variant='contained'>Edit Task</Button>
      </form>
    </div>
  )
}

export default EditTask