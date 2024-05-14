// signup.component.jsx

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, TextField, Button, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UserService } from '../../services/user.service';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '5px',
    margin: '20px',
    marginLeft: '13vw',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
    paddingLeft: '1vw',
    paddingRight: '1vw',
  },
  signupBtn: {
    color: 'blue',
    fontSize: '16px',
    cursor: 'pointer',
  },
}));

const SignupComponent = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const userService = new UserService();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const formSubmit = async () => {
    try {
      console.log(user);
      // Your form submission logic here
      // Example: You can use axios or fetch to make an API call
      // const response = await fetch('API_ENDPOINT_HERE', {
      //   method: 'POST',
      //   body: JSON.stringify(user),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // const data = await response.json();
      // console.log(data);
      // Handle successful registration response
      // setSnackbarMessage('User registered successfully!');
      // setSnackbarOpen(true);

      // Simulated successful registration
      setSnackbarMessage('User registered successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error registering user:', error);
      setSnackbarMessage('Error registering user!');
      setSnackbarOpen(true);
    }
  };

  const clearFields = () => {
    setUser({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className="container text-center">
          <Typography variant="h1" style={{ marginTop: '10px' }}>
            Register Here !!
          </Typography>
        </div>
        <form onSubmit={formSubmit}>
          <div className="form-field-container">
            <div className="row">
              <div className="col">
                <TextField
                  className={classes.fullWidth}
                  label="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col">
                <TextField
                  className={classes.fullWidth}
                  label="Last Name"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Remaining form fields go here */}

          <div className="container text-center" style={{ marginTop: '10px' }}>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
            <Button
              style={{ marginLeft: '20px' }}
              variant="contained"
              color="secondary"
              onClick={clearFields}
            >
              Clear
            </Button>
            <p style={{ marginTop: '10px' }}>
              Already Registered ?{' '}
              <Link to="/" className={classes.signupBtn}>
                Login Here
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Card>
  );
};

export default SignupComponent;
