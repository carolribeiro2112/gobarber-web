import { render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import SignIn from "../../Pages/SignIn";

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('../../hooks/ToastContext', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

jest.mock('react-router-dom', ()=>{
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({children}:{ children: React.ReactNode}) => children, 
  };
});

jest.mock('../../hooks/AuthContext', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn
    })
  };
});

describe('SignIn page', ()=>{
  beforeEach(()=>{
    mockedHistoryPush.mockClear();
  });

  it('should be able to sign in', async ()=>{
    const { getByPlaceholderText, getByText } = render(<SignIn/>);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: {value: 'johndoe@example.com'} })
    fireEvent.change(passwordField, { target: {value: '123456'} })
    fireEvent.click(buttonElement);

    await waitFor(()=>{
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard')
    });
  });

  it('should not be able to sign in with invalid credentials', async ()=>{
    const { getByPlaceholderText, getByText } = render(<SignIn/>);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: {value: 'non-valid-email'} })
    fireEvent.change(passwordField, { target: {value: '123456'} })
    fireEvent.click(buttonElement);

    await waitFor(()=>{
      expect(mockedHistoryPush).not.toHaveBeenCalledWith('/dashboard')
    });
  });

  it('should display an error if login fails', async ()=>{
    mockedSignIn.mockImplementation(()=>{
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignIn/>);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: {value: 'johndoe@example.com'} })
    fireEvent.change(passwordField, { target: {value: '123456'} })
    fireEvent.click(buttonElement);

    await waitFor(()=>{
      expect(mockedAddToast).toHaveBeenCalledWith(expect.objectContaining({
        type: 'error'
      }))
    });
  });
});