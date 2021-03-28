import React, { useContext, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { deleteCurrentUser, GetUserData } from "./api";
  // import UserContext from "./usercontext";

 function Users() {
  // let users = useContext(UserContext);
  let [userData, setUserData] = useState([]);
  

  useEffect(async () => {
    let users = await GetUserData();
    setUserData(...userData, users.data);
  },[])

  async function deleteUser(id){
    await deleteCurrentUser(id);
    let updatedUsers = await GetUserData();
    setUserData(updatedUsers.data);
  }
  return (
    <>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link to="/create-user" href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i class="fas fa-download fa-sm text-white-50"></i> Create Users
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Action</th>
                </tr>
              </thead>
              
              <tbody>
                {
                   userData.map((user,index)=>
                  <tr key={index}>
                  <Link to="/profile/1">
                    {user.name}
                  </Link>
                  <td>{user.email}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                  <Link to={`/edit-user/${user.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                  <i class="fas fa-download fa-sm text-white-50"></i> Edit
                    </Link>
                    
                  </td>
                </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
