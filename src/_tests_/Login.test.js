// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../components/Login';

// Mocking useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

test('renders Login component', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome back aniket !/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  expect(screen.getByText(/Remember me/i)).toBeInTheDocument();
  expect(screen.getByText(/Forgot Password/i)).toBeInTheDocument();
});

test('navigates to dashboard on sign in click', () => {
  const mockedNavigate = jest.fn();
  jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockedNavigate);

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText(/Sign in/i));
  expect(mockedNavigate).toHaveBeenCalledWith('/dashboard');
});
