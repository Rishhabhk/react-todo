import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddTask from '../pages/AddTask';
import '@testing-library/jest-dom';


test('renders AddTask component', () => {
  render(
    <BrowserRouter>
      <AddTask setTaskList={() => {}} />
    </BrowserRouter>
  );

  const addTaskHeading = screen.getByText('ADD TASK');
  expect(addTaskHeading).toBeInTheDocument();
});

test('submits task form', () => {
  const setTaskListMock = jest.fn();

  render(
    <BrowserRouter>
      <AddTask setTaskList={setTaskListMock} />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByLabelText(/Task name/i), { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText(/AddTask/i));

  expect(setTaskListMock).toHaveBeenCalled();
  
});


