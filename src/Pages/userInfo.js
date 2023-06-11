import React, { useState, useEffect } from "react";
import axios from "axios";

const Create = () => {
  const [userData, setUserData] = useState([]);
  // const getUserData = async () => {
  //   const res = await axios.get("http://localhost:8000/api/auth/users");
  //   const data = await res.data;
  //   setUserData(data?.users);
  //   console.log(userData);
  // };
  // useEffect(() => {
  //   getUserData();
  // }, []);
  return (
    <>
      <div className="create">
        <h3>User Info</h3>
        <table>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
          {/* {userData?.map((user) => (
            <tr>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))} */}
          <tr>
          <td>Username</td>
          <td>Latitude</td>
        </tr>
        </table>
      </div>
    </>
  );
};

export default Create;
