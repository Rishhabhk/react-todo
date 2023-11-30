import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditTask from '../pages/EditTask';
import '@testing-library/jest-dom';

// Mock React Router DOM
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useNavigate: jest.fn(() => jest.fn()), // Return a function from useNavigate
    useParams: jest.fn(() => ({
      '*': 'Edited_Task/Edited_Description/2/123', // Provide meaningful values here
    })),
    useLocation: jest.fn(),
  };
});

test('renders EditTask component', () => {
  const setTaskListMock = jest.fn();

  render(
    <BrowserRouter>
      <EditTask taskList={[]} setTaskList={setTaskListMock} />
    </BrowserRouter>
  );

  // Example using more specific query
  const editTaskHeading = screen.getByRole('heading', { name: /Edit TASK/i });
  expect(editTaskHeading).toBeInTheDocument();
});

test('submits edited task form', async () => {
  const setTaskListMock = jest.fn();

  render(
    <BrowserRouter>
      <EditTask taskList={[]} setTaskList={setTaskListMock} />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByLabelText(/Task name/i), { target: { value: 'Edited Task' } });
  fireEvent.click(screen.getByRole('button', { name: /Edit Task/i }));

  await waitFor(() => {
    expect(setTaskListMock).toHaveBeenCalled();
  });

  // Add more assertions if needed
});
