import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddTask from './pages/AddTask'
import EditTask from './pages/EditTask'
import TaskList from './pages/TaskList'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

const getLocalTasks = () => {
  let Items = localStorage.getItem('taskItems');
  if(Items) {
      return JSON.parse(localStorage.getItem('taskItems'));
  }
  else {
      return [];
  }
}

function App() {
  const theme = createTheme({
    
  })

  const [taskList, setTaskList] = useState(getLocalTasks());


  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<TaskList taskList={taskList} setTaskList={setTaskList}/>}></Route>
        <Route path='/edittask/*' element={<EditTask taskList={taskList} setTaskList={setTaskList}/>}></Route>
        <Route path='/addtask' element={<AddTask setTaskList={setTaskList}/>}></Route>
      </Routes>
    </ThemeProvider>

  )
}

export default App
