import { UserContextProvider } from './UserContext';
import { UserInfoPane } from './UserInfoPane';
import { fireEvent, render, screen } from '@testing-library/react';

function setupTest() {
  return {
    render() {
      render(
        <UserContextProvider>
          <UserInfoPane />
        </UserContextProvider>
      );
    },
    enterUsername(username) {
      const userNameInput = screen.getByPlaceholderText('username');
      fireEvent.change(userNameInput, { target: {value: username}})  
    },
    login() {
      const loginButton = screen.getByRole('button', {name: 'Login'});
      fireEvent.click(loginButton);  
    },
    logout() {
      const logoutButton = screen.getByRole('button', {name: 'Logout'});
      fireEvent.click(logoutButton);  
    }
  }    
}

describe('UserPaneInfo', () => {
  it('renders the login form', () => {
    const { render } = setupTest();
    render();
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
  });

  it('allows user to login', () => {
    const { render, login, enterUsername } = setupTest();
    render();

    enterUsername('Martin');
    login();
    
    const currentUser = screen.getByTestId('currentUserInfo');
    expect(currentUser).toBeInTheDocument();
  });

  it('allows user to logout', () => {
    const { render, enterUsername, login, logout } = setupTest();
    render();

    enterUsername('Martin');
    login();
    logout();

    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
  });
});
