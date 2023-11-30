import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import '@testing-library/jest-dom';
import TaskList from '../pages/TaskList';

test('renders TaskList component', () => {
  const taskList = [
    { id: '1', title: 'Task 1', desc: 'Description 1', priority: 1, status: false },
    // Add more sample tasks as needed
  ];

  render(
    <BrowserRouter> {/* Wrap your component with BrowserRouter */}
      <TaskList taskList={taskList} setTaskList={() => {}} />
    </BrowserRouter>
  );

  const taskElement = screen.getByText('Task 1');
  expect(taskElement).toBeInTheDocument();
});

test('handles checkbox click', () => {
  const taskList = [
    { id: '1', title: 'Task 1', desc: 'Description 1', priority: 1, status: false },
  ];

  const setTaskListMock = jest.fn();

  render(
    <BrowserRouter> {/* Wrap your component with BrowserRouter */}
      <TaskList taskList={taskList} setTaskList={setTaskListMock} />
    </BrowserRouter>
  );

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(setTaskListMock).toHaveBeenCalledWith(
    expect.arrayContaining([
      expect.objectContaining({ id: '1', status: true }),
    ])
  );
});

// Add more tests as needed
