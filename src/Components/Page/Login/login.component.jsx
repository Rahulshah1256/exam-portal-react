// login.component.jsx

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: '100%',
    marginTop: '10px',
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  bootstrapWrapper: {
    marginTop: '10vh',
  },
  root: {
    marginTop: '80px',
  },
  signupbtn: {
    color: 'blue',
    fontSize: '16px',
    cursor: 'pointer',
  },
  loginbtn: {
    width: '100%',
    fontSize: '18px',
  },
  text: {
    margin: '10vh',
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login button clicked');

    if (!loginData.username.trim() || !loginData.password.trim()) {
      enqueueSnackbar('Username and Password are required !!', { variant: 'error' });
      return;
    }

    // Perform your login logic here
    // Example: You can use fetch or axios to make an API call

    // Redirect to dashboard after successful login
    history.push('/dashboard');
  };

  const handleClearFields = () => {
    setLoginData({ username: '', password: '' });
  };

  return (
    <div className={classes.bootstrapWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={`${classes.text} text-center`}>
              <Typography variant="h1" style={{ color: 'rgb(24, 73, 116)' }}>
                <strong>Welcome To Exam Portal</strong>
              </Typography>
              <Typography variant="h3" style={{ textAlign: 'justify' }}>
                The key advantage of using the online examination system is that it is well incorporated into a technologically rich world. For professional situations, the use of pen and paper is growing. Most of the work is done with email, text messages, presentation machines, computer-based development, etc.
              </Typography>
            </div>
          </div>
          <div className="col-md-6">
            <Card>
              <CardContent>
                <div className="container text-center">
                  <CardMedia component="img" image="../../../assets/examlogo.png" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                  <TextField
                    className={`${classes.fullWidth} text-center`}
                    label="User Name"
                    variant="outlined"
                    name="username"
                    value={loginData.username}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter here"
                  />
                  <TextField
                    className={classes.fullWidth}
                    label="User Password"
                    variant="outlined"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    type="password"
                    required
                    placeholder="Enter here"
                  />
                  <div className="container text-center">
                    <Button className={classes.loginbtn} variant="contained" color="primary" type="submit">
                      Login
                    </Button>
                    <Button className="ml10" variant="contained" color="secondary" onClick={handleClearFields}>
                      Clear
                    </Button>
                    <p style={{ marginTop: '10px' }}>
                      Don't have an account ? <span className={classes.signupbtn} onClick={() => history.push('/signup')}>Register here</span>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
