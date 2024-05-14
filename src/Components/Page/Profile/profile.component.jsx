// profile.component.jsx

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  profileImage: {
    maxWidth: '150px',
    maxHeight: '150px',
    border: '2px solid #ff4081',
    borderRadius: '50%',
  },
  card: {
    padding: '5px',
    margin: '20px',
    marginLeft: '13vw',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ProfileComponent = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating fetching user data
    const fetchUserData = async () => {
      try {
        // Perform your user data fetching logic here
        // Example: You can use fetch or axios to make an API call
        // const response = await fetch('API_ENDPOINT_HERE');
        // const userData = await response.json();
        // setUser(userData);

        // Simulated user data
        const userData = {
          firstName: 'John',
          lastName: 'Doe',
          username: 'johndoe',
          phone: '1234567890',
          authorities: [{ authority: 'ROLE_USER' }],
        };
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className="container text-center">
          <Typography variant="h1" style={{ marginTop: '10px' }}>
            Profile
          </Typography>
        </div>
        {user && (
          <div className="bootstrap-wrapper">
            <div className="container">
              <div className="container text-center">
                <img
                  src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
                  alt=""
                  className={classes.profileImage}
                />
                <Typography variant="h1" className="mt20">{`${user.firstName} ${user.lastName}`}</Typography>
              </div>
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <TableContainer>
                    <Table className="table text-center">
                      <TableBody>
                        <TableRow>
                          <TableCell>Username</TableCell>
                          <TableCell>{user.username}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Phone</TableCell>
                          <TableCell>{user.phone}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Role</TableCell>
                          <TableCell>{user.authorities[0].authority}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileComponent;
