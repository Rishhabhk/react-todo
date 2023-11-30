import React from 'react'
import { useState, useEffect } from 'react';
import { Button, IconButton, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './TaskList.css'


const TaskList = ({ taskList, setTaskList }) => {

    const deleteTask = (id) => {
        const updatedTasks = taskList.filter((elem) => {
            return id !== elem.id;
        })
        setTaskList(updatedTasks);
        localStorage.setItem('taskItems', JSON.stringify(updatedTasks));
    }

    const removeAll = () => {
        setTaskList([]);
        localStorage.clear();
    }

    const toggleTaskStatus = (id) => {
        const updatedTasks = taskList.map((task) => {
            if (task.id === id) {
                // Toggle the status
                task.status = !task.status;
            }
            return task;
        });

        setTaskList(updatedTasks);
        localStorage.setItem('taskItems', JSON.stringify(updatedTasks));
    };

    return (
        <div className='taskListWrapper'>
            <Typography variant='h3' marginBottom={4} >TASK LIST</Typography>

            {
                taskList.length === 0 ?
                    <div>
                        <Typography variant='h5' marginBottom={3}>No Task Added</Typography>
                        <NavLink to='/addtask'><Button variant='contained' fullWidth>Add Task</Button></NavLink>
                    </div> :


                    <div className='taskListContainer'>
                        <div className='addClearBtns'>
                            <NavLink to='/addtask'><Button variant='contained' style={{ width: "10rem" }}>Add Task</Button></NavLink>
                            <Button variant='contained' color='warning' style={{ width: "10rem" }} onClick={removeAll}>Clear all</Button>
                        </div>
                        <ul className='addedTasks'>
                            {
                                taskList.map((task) => (
                                    <li className="task" key={task.id} >

                                        <div className='taskFirstRow'>



                                            <Typography variant='h5' style={{ textTransform: "capitalize" }}>
                                                <Checkbox
                                                    icon={<RadioButtonUncheckedIcon />}
                                                    checkedIcon={<CheckCircleOutlineIcon color='success' />}
                                                    style={{ width: "20px", marginRight: 10 }}
                                                    checked={task.status}
                                                    onChange={() => toggleTaskStatus(task.id)}
                                                />
                                                {task.title}
                                            </Typography>
                                            <div className='delEdit'>

                                                <IconButton color='error' onClick={() => deleteTask(task.id)}><DeleteIcon /></IconButton>
                                                <NavLink to={`/edittask/${encodeURIComponent(task.title || '')}/${task.desc ? encodeURIComponent(task.desc) : ''}/${task.priority ? encodeURIComponent(task.priority) : ''}/${task.id ? encodeURIComponent(task.id) : ''}`}><IconButton color='info' ><EditIcon /></IconButton></NavLink>
                                            </div>
                                        </div>

                                        <Typography variant='body1' marginBottom={1} color='brown'>
                                            {
                                                task.priority === 3 ? "Priority - Low" : null
                                            }
                                            {
                                                task.priority === 2 ? "Priority - Medium" : null
                                            }
                                            {
                                                task.priority === 1 ? "Priority - High" : null
                                            }
                                        </Typography>
                                        <Typography variant="body1" style={{ color: "#696969", textTransform: "capitalize" }}>{task.desc}</Typography>

                                    </li>
                                ))
                            }

                        </ul>
                    </div>
            }
        </div>
    )
}

export default TaskList