// update-user.component.jsx

import React from 'react';

const UpdateUserComponent = ({ user, updateCategory }) => {
  return (
    <div>
      <div className="card" style={{ padding: '5px', margin: '20px', marginLeft: '13vw', width: '70%', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container text-center">
          <h1 style={{ marginTop: '10px' }}>Update Profile</h1>
        </div>
        <div>
          <div className="bootstrap-wrapper">
            <div className="container">
              <div className="container text-center">
                <img
                  src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
                  alt=""
                  className="profile-image"
                  style={{ maxWidth: '150px', maxHeight: '150px', border: '2px solid #ff4081', borderRadius: '50%' }}
                />

                <h1 className="mt20">{user.firstName} {user.lastName}</h1>
              </div>

              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <table className="table text-center">
                    <tbody>
                      <tr>
                        <td>Username</td>
                        <td>{user.username}</td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>{user.phone}</td>
                      </tr>
                      <tr>
                        <td>Role</td>
                        <td>{user.authorities[0].authority}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ marginBottom: '10px' }}>
          <button className="mat-raised-button" color="primary">UPDATE</button>
        </div>
      </div>

      <div className="col-md-10 offset-md-1">
        <div className="container text-center mt20">
          <h1><strong> Update Category</strong></h1>
        </div>
        <div>
          <div className="bootstrap-wrapper">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <form onSubmit={updateCategory}>
                  <div className="w100" style={{ width: '100%' }}>
                    <label>Username</label>
                    <input
                      required
                      value={user.title}
                      name="title"
                      type="text"
                      placeholder="Enter Title here"
                    />
                  </div>
                  <div className="w100" style={{ width: '100%' }}>
                    <label>Description</label>
                    <textarea
                      placeholder="Enter Description here"
                      rows="10"
                      value={user.description}
                      name="description"
                      required
                    ></textarea>
                  </div>
                  <div className="container text-center">
                    <button type="submit" className="mat-raised-button" color="accent">
                      <span className="mr-2">edit</span>Update Category
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserComponent;
