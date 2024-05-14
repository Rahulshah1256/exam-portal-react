// HomeComponent.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const HomeComponent = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const history = useHistory();

  const formSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!loginData.username.trim()) {
      setSnackbarMessage('Username is required !!');
      setSnackbarOpen(true);
      return;
    }

    if (!loginData.password.trim()) {
      setSnackbarMessage('Password is required !!');
      setSnackbarOpen(true);
      return;
    }

    // Request to server to generate token
    // Implement your login logic here
    // Redirect to appropriate dashboard based on user role
    // Example:
    // history.push('/admin') for admin dashboard
    // history.push('/user-dashboard/0') for normal user dashboard
  };

  const clearFields = () => {
    setLoginData({ username: '', password: '' });
  };

  return (
    <div className="bootstrap-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text text-center">
              <h1 style={{ color: 'rgb(24, 73, 116)' }}>
                <strong>Welcome To Exam Portal</strong>
              </h1>
              <h3 style={{ textAlign: 'justify' }}>
                The key advantage of using the online examination system is that it
                is well incorporated into a technologically rich world. For
                professional situations, the use of pen and paper is growing. Most
                of the work is done with email, text messages, presentation
                machines, computer-based development, etc
              </h3>
            </div>
          </div>

          <div className="col-md-6">
            <div className="container text-center">
              <img src="../../../assets/examlogo.png" alt="" />
            </div>
            <form onSubmit={formSubmit}>
              <div className="container text-center">
                <button type="submit" className="btn btn-primary loginbtn">
                  Login
                </button>
                <button
                  className="ml10 btn btn-outline-secondary"
                  type="button"
                  onClick={clearFields}
                >
                  Clear
                </button>
                <p style={{ marginTop: '10px' }}>
                  Don't have an account ?
                  <span className="signupbtn" onClick={() => history.push('/signup')}>
                    Register here
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="error" onClose={() => setSnackbarOpen(false)}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default HomeComponent;
